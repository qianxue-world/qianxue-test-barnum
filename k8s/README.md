# MBTI Personality Test - Kubernetes Deployment

This directory contains Kubernetes manifests for deploying the MBTI Personality Test application with ArgoCD.

## Files Overview

- `namespace.yaml` - Creates the mbti-test namespace
- `deployment.yaml` - Application deployment with 2 replicas
- `service.yaml` - ClusterIP service for internal communication
- `ingress.yaml` - Nginx ingress with SSL/TLS support
- `configmap.yaml` - Nginx configuration
- `hpa.yaml` - Horizontal Pod Autoscaler (2-10 replicas)
- `kustomization.yaml` - Kustomize configuration
- `argocd-application.yaml` - ArgoCD Application manifest

## Prerequisites

1. **Kubernetes cluster** with:
   - Nginx Ingress Controller
   - Cert-Manager (for SSL certificates)
   - Metrics Server (for HPA)

2. **ArgoCD** installed and configured

3. **Container Registry** with your built image

## Setup Instructions

### 1. Update Configuration

Edit the following files with your specific values:

**ingress.yaml:**
```yaml
- host: mbti.yourdomain.com  # Replace with your domain
```

**deployment.yaml:**
```yaml
image: your-registry/mbti-personality-test:latest  # Replace with your image
```

**argocd-application.yaml:**
```yaml
repoURL: https://github.com/your-username/your-repo.git  # Replace with your repo
```

### 2. Deploy with ArgoCD

#### Option A: Apply ArgoCD Application directly
```bash
kubectl apply -f k8s/argocd-application.yaml
```

#### Option B: Create Application via ArgoCD UI
1. Open ArgoCD UI
2. Click "New App"
3. Fill in the details:
   - **Application Name:** mbti-personality-test
   - **Project:** default
   - **Repository URL:** https://github.com/your-username/your-repo.git
   - **Path:** k8s
   - **Destination:** https://kubernetes.default.svc
   - **Namespace:** mbti-test

#### Option C: Use ArgoCD CLI
```bash
argocd app create mbti-personality-test \
  --repo https://github.com/your-username/your-repo.git \
  --path k8s \
  --dest-server https://kubernetes.default.svc \
  --dest-namespace mbti-test \
  --sync-policy automated \
  --auto-prune \
  --self-heal
```

### 3. Manual Deployment (without ArgoCD)

```bash
# Apply all manifests
kubectl apply -f k8s/

# Or use Kustomize
kubectl apply -k k8s/
```

## Monitoring and Management

### Check Application Status
```bash
# Check pods
kubectl get pods -n mbti-test

# Check service
kubectl get svc -n mbti-test

# Check ingress
kubectl get ingress -n mbti-test

# Check HPA
kubectl get hpa -n mbti-test
```

### View Logs
```bash
kubectl logs -f deployment/mbti-personality-test -n mbti-test
```

### Scale Application
```bash
kubectl scale deployment mbti-personality-test --replicas=5 -n mbti-test
```

## ArgoCD Features Enabled

- ✅ **Auto-sync** - Automatically deploys changes from Git
- ✅ **Self-healing** - Automatically fixes configuration drift
- ✅ **Pruning** - Removes resources deleted from Git
- ✅ **Retry logic** - Retries failed deployments
- ✅ **Revision history** - Keeps last 10 deployments

## SSL/TLS Configuration

The ingress is configured for automatic SSL certificate generation using cert-manager:

```yaml
annotations:
  cert-manager.io/cluster-issuer: "letsencrypt-prod"
```

Make sure you have cert-manager installed and a ClusterIssuer configured.

## Horizontal Pod Autoscaling

The HPA is configured to:
- **Min replicas:** 2
- **Max replicas:** 10
- **CPU threshold:** 70%
- **Memory threshold:** 80%

## Resource Limits

Each pod is configured with:
- **CPU Request:** 100m
- **CPU Limit:** 200m
- **Memory Request:** 128Mi
- **Memory Limit:** 256Mi

## Health Checks

- **Liveness Probe:** HTTP GET / every 10s
- **Readiness Probe:** HTTP GET / every 5s

## Security Features

- Security headers in nginx configuration
- Non-root container execution
- Resource limits and requests
- Network policies (can be added)

## Troubleshooting

### Check ArgoCD Application Status
```bash
kubectl get application mbti-personality-test -n argocd
```

### View ArgoCD Application Details
```bash
kubectl describe application mbti-personality-test -n argocd
```

### Force Sync from ArgoCD
```bash
argocd app sync mbti-personality-test
```

### Check Events
```bash
kubectl get events -n mbti-test --sort-by='.lastTimestamp'
```

### Debug Pod Issues
```bash
kubectl describe pod <pod-name> -n mbti-test
kubectl logs <pod-name> -n mbti-test
```

## Updating the Application

1. **Push changes to Git repository**
2. **ArgoCD will automatically detect and deploy changes**
3. **Monitor deployment in ArgoCD UI**

## Environment-Specific Configurations

For different environments (dev, staging, prod), you can:

1. **Use Kustomize overlays:**
```
k8s/
├── base/
│   ├── deployment.yaml
│   ├── service.yaml
│   └── kustomization.yaml
└── overlays/
    ├── dev/
    ├── staging/
    └── prod/
```

2. **Create separate ArgoCD applications** for each environment

3. **Use different Git branches** for different environments

## Backup and Disaster Recovery

- **Persistent data:** This application is stateless
- **Configuration:** Stored in Git repository
- **Secrets:** Use external secret management (e.g., External Secrets Operator)

## Performance Tuning

- Adjust resource limits based on actual usage
- Configure HPA thresholds based on traffic patterns
- Use CDN for static assets in production
- Consider using PodDisruptionBudget for high availability