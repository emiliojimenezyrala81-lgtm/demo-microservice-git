output "ec2_public_ip" {
    description = "Ip publica de la instancia"
    value = aws_instance.this.public_ip
}

output "ec2_public_dns" {
    description = "DNS publica de la instancia"
    value = aws_instance.this.public_dns
}