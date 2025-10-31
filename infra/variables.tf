variable "project_name" {
    description = "Nombre del proyecto para las etiquetas"
    type = string
    default = "demo-lab-cicd"
}

variable "region" {
    description = "Region de AWS"  
    type = string
    default = "us-east-1"
}

variable "admin_cidr_ssh" {
    description = "Bloque CIDR autorizado para ssh"
    type = string
    default = "0.0.0.0/0"
}

variable "public_ssh_key" {
    description = "Contenido de la llave publica SSH"
    type = string
}