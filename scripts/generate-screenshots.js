#!/usr/bin/env node

/**
 * MBTI截图生成脚本
 * 
 * 功能：
 * 1. 启动开发服务器
 * 2. 为所有16种MBTI类型生成结果页截图
 * 3. 保存到screenshots文件夹
 * 
 * 使用方法：
 * npm run screenshot
 */

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 所有16种MBTI类型
const mbtiTypes = [
  'INTJ', 'INTP', 'ENTJ', 'ENTP',
  'INFJ', 'INFP', 'ENFJ', 'ENFP',
  'ISTJ', 'ISTP', 'ESTJ', 'ESTP',
  'ISFJ', 'ISFP', 'ESFJ', 'ESFP'
];

// 生成随机MBTI类型
function getRandomType() {
  return mbtiTypes[Math.floor(Math.random() * mbtiTypes.length)];
}

// 生成20个随机类型（可能重复）
function generateRandomTypes(count = 20) {
  const types = [];
  for (let i = 0; i < count; i++) {
    types.push({
      type: getRandomType(),
      index: i + 1
    });
  }
  return types;
}

// 创建screenshots文件夹
const screenshotsDir = path.join(path.dirname(__dirname), 'screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

async function generateScreenshots() {
  console.log('🚀 启动截图生成器...\n');
  console.log('📊 将生成20张随机MBTI类型的截图\n');
  
  const browser = await puppeteer.launch({
    headless: 'false',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu'
    ],
    protocolTimeout: 60000
  });

  // 生成20个随机类型
  const randomTypes = generateRandomTypes(20);
  
  // 统计每种类型的数量
  const typeCount = {};
  randomTypes.forEach(({ type }) => {
    typeCount[type] = (typeCount[type] || 0) + 1;
  });
  
  console.log('📋 随机生成的类型分布:');
  Object.entries(typeCount).sort().forEach(([type, count]) => {
    console.log(`   ${type}: ${count}张`);
  });
  console.log('');

  try {
    for (const { type, index } of randomTypes) {
      console.log(`📸 [${index}/20] 正在生成 ${type} 的截图...`);
      
      let page;
      try {
        page = await browser.newPage();
        
        // 设置视口大小
        await page.setViewport({
          width: 1200,
          height: 2400,
          deviceScaleFactor: 2 // 高清截图
        });

        // 访问结果页，添加测试模式参数和随机种子
        const randomSeed = Math.random();
        const url = `http://localhost:5173/?test=true&type=${type}&seed=${randomSeed}`;
        await page.goto(url, {
          waitUntil: 'networkidle2',
          timeout: 30000
        });

        // 等待页面完全加载
        await page.waitForSelector('.result-screen', { timeout: 10000 });
        
        // 额外等待动画完成
        await new Promise(resolve => setTimeout(resolve, 2000));

        // 截图 - 使用序号命名
        const timestamp = Date.now();
        const screenshotPath = path.join(screenshotsDir, `${String(index).padStart(2, '0')}_${type}_${timestamp}.png`);
        await page.screenshot({
          path: screenshotPath,
          fullPage: true
        });

        console.log(`✅ [${index}/20] ${type} 截图已保存`);
        
      } catch (error) {
        console.error(`❌ [${index}/20] ${type} 截图失败:`, error.message);
      } finally {
        if (page) {
          await page.close().catch(() => {});
        }
      }
      
      // 短暂延迟，避免过快
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log('\n🎉 所有截图生成完成！');
    console.log(`📁 截图保存位置: ${screenshotsDir}`);
    console.log('\n📊 最终统计:');
    Object.entries(typeCount).sort().forEach(([type, count]) => {
      console.log(`   ${type}: ${count}张`);
    });
    
  } catch (error) {
    console.error('❌ 生成截图时出错:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

// 检查开发服务器是否运行
async function checkServer() {
  try {
    const response = await fetch('http://localhost:5173');
    return response.ok;
  } catch {
    return false;
  }
}

// 主函数
async function main() {
  console.log('🔍 检查开发服务器...');
  
  const serverRunning = await checkServer();
  
  if (!serverRunning) {
    console.error('❌ 开发服务器未运行！');
    console.log('💡 请先运行: npm run dev');
    console.log('💡 然后在另一个终端运行: npm run screenshot');
    process.exit(1);
  }

  console.log('✅ 开发服务器正在运行\n');
  
  await generateScreenshots();
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
