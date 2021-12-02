## Baixar Dependência

    ˋˋˋ
        yarn
    ˋˋˋ
## Docker

Criar Imagem Docker

    ˋˋˋ
        docker build -t fwdback .
    ˋˋˋ

Rodar docker-compose

    ˋˋˋ
        docker-compose up
    ˋˋˋ

Criar usuário adiministrador com servidor executado

    ˋˋˋ
        yarn seed:admin
    ˋˋˋ

    Resposta

        ˋˋˋ
            {
                "name":"Administrador",
                "clinic_name":"admin_clinic",
                "email":"admin@admin.com",
                "password":"admin",
                "profile":"admin",
                "register":"admin2030"
            }
        ˋˋˋ
