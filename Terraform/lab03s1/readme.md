# Terraform Lab 03 - Session 1: Azure Infrastructure Provisioning

## Overview
This lab demonstrates using Terraform to provision basic Azure infrastructure. It covers creating a Resource Group, Virtual Network, Subnets, and Network Security Groups in a structured, reusable manner.

## Key Components

### Provider Configuration
- Sets up the Azure provider with appropriate version constraints
- Demonstrates provider configuration best practices

### Network Infrastructure
- Creates a Virtual Network with custom address space (10.0.0.0/16)
- Establishes two subnets with specific address prefixes
- Configures DNS servers for the Virtual Network
- Sets up subnet associations with security groups

### Security Configuration
- Creates Network Security Groups with specific inbound rules
- Implements security rules for SSH (port 22) and RDP (port 3389)
- Configures WinRM (port 5985) access for Windows management
- Associates security groups with appropriate subnets

### Resource Organization
- Organizes all resources within a central resource group
- Creates logical network segmentation with multiple subnets
- Implements proper resource naming conventions

## Variables
The lab utilizes input variables for customization, including:
- Azure region settings
- Resource Group name
- Virtual Network address space
- Subnet configurations
- Network Security Group names and rules

## Best Practices Demonstrated
- Resource modularization
- Proper state management
- Variable usage for configuration

## Usage
1. Initialize the Terraform working directory: `terraform init`
2. Plan the infrastructure changes: `terraform plan`
3. Apply the configuration: `terraform apply`
4. To destroy resources when finished: `terraform destroy`
