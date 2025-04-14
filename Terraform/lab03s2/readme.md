# Lab03s2 - Infrastructure as Code with Terraform

## Overview
This lab builds on the foundation established in Lab03s1, expanding the infrastructure to include a virtual machine deployment. While Lab03s1 focused on network infrastructure setup (resource groups, virtual networks, subnets, and network security groups), Lab03s2 extends this by configuring and deploying an Ubuntu virtual machine within the existing network.

## File Structure

### vars03s1.tf
This file contains variable declarations for the base networking infrastructure that was established in Lab03s1:
- Resource group configuration (`lab03s1-rg`)
- Location setting (`East US`)
- Virtual network configuration (`lab03s1-vnet` with address space `10.0.0.0/16`)
- Two subnet configurations (with address spaces `10.0.1.0/24` and `10.0.2.0/24`)
- Two network security groups (`lab03s1-nsg1` and `lab03s1-nsg2`)

### vars03s2.tf
This file introduces new variables specific to the virtual machine deployment:
- VM name configuration (`lab03s2-db1-u-vm1`)
- VM size specification (`Standard_B1s`)
- Administrative credentials (username and SSH key path)
- OS disk configuration:
  - Premium SSD storage (`Premium_LRS`)
  - 32GB disk size
  - ReadWrite caching
- Ubuntu Server OS specifications:
  - Publisher: Canonical
  - Offer: UbuntuServer
  - SKU: 18.04-LTS (Ubuntu 18.04 LTS)
  - Latest version

## Extension from Lab03s1
Lab03s2 represents a significant progression in the infrastructure deployment journey:

1. **Infrastructure Layering**: While Lab03s1 established the foundation with networking components, Lab03s2 builds upon this foundation by adding compute resources (the virtual machine).

2. **Compute Resource Configuration**: This lab introduces configuration for virtual machines, including:
   - VM sizing and naming conventions
   - Operating system specifications
   - Storage configurations
   - Authentication methods (username and SSH key)

3. **Practical Application**: This progression demonstrates a real-world approach to infrastructure deployment, where network infrastructure is established before compute resources are deployed into it.

4. **Configuration Dependencies**: The VM deployment inherently depends on the networking components from Lab03s1, showcasing how Terraform manages dependencies between resources.

## Key Skills Demonstrated
- Variable definition for complex infrastructure components
- Configuration of Linux-based virtual machines in Azure
- SSH key-based authentication setup
- Storage configuration for virtual machines
- OS image specification for cloud deployments

This lab provides practical experience with deploying compute resources in a cloud environment using Infrastructure as Code principles with Terraform.
