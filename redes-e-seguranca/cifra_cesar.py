# Simulador de Cifra de César - Demonstração de conceito básico de Segurança
def criptografar(texto, chave):
    resultado = ""
    for char in texto:
        if char.isalpha():
            ponto = ord('A') if char.isupper() else ord('a')
            resultado += chr((ord(char) - ponto + chave) % 26 + ponto)
        else:
            resultado += char
    return resultado

mensagem = "SEGURANCA"
chave_secreta = 3
print(f"Mensagem Original: {mensagem}")
print(f"Mensagem Criptografada: {criptografar(mensagem, chave_secreta)}")
