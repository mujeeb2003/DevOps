# Terraform Lab 02 - Azure Network Infrastructure

This lab demonstrates how to create a basic Azure network infrastructure using Terraform. The configuration sets up a virtual network with two subnets, each with its own network security group (NSG) and security rules.

## Resources Created

- **Resource Group**: `lab02-rg` in East US region
- **Virtual Network**: `lab02-vnet` with address space 10.0.0.0/16 and custom DNS servers
- **Subnets**:
    - `lab02-subnet1` (10.0.1.0/24)
    - `lab02-subnet2` (10.0.2.0/24)
- **Network Security Groups**:
    - `lab02-nsg1`: Associated with subnet1, allowing SSH (port 22) traffic
    - `lab02-nsg2`: Associated with subnet2, allowing RDP (port 3389) and WinRM (port 5985) traffic

## Security Rules

### NSG1 (for Linux VMs)
- **Rule1**: Allow inbound TCP traffic on port 22 (SSH)

### NSG2 (for Windows VMs)
- **Rule1**: Allow inbound TCP traffic on port 3389 (RDP)
- **Rule2**: Allow inbound TCP traffic on port 5985 (WinRM)

## Network Topology

```
lab02-vnet (10.0.0.0/16)
│
├── lab02-subnet1 (10.0.1.0/24)
│   └── Protected by lab02-nsg1 (SSH access)
│
└── lab02-subnet2 (10.0.2.0/24)
        └── Protected by lab02-nsg2 (RDP and WinRM access)
```

## Provider Configuration

The lab uses the Azure provider (azurerm) version ~> 3.0.

## Learning Objectives

- Creating Azure resource groups using Terraform
- Setting up virtual networks with custom address spaces and DNS servers
- Configuring multiple subnets within a virtual network
- Creating and configuring network security groups with specific security rules
- Associating NSGs with subnets using association resources

## Usage

To deploy this infrastructure:

```bash
terraform init
terraform plan
terraform apply
```

To destroy the infrastructure:

```bash
terraform destroy
```