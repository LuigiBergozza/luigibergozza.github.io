/* 
Repositorios especiias:
    (pagina de apresentação)
        Com seu nome e README.md LuigiBergozza/README.md  = será exibido no github

    (hospedar um site pessoal para vc) /com arquivos estaticos, sem dinamismo
    luigibergozza.github.io  =  github.io é o servidor de hospedagem do github

-------------------

no git bash
    mkdir exercicio-3
    cd exercicio-3
    git init
    index.html
    git add .
    git commit -m "commit inicial"
    git tag v1.0.0

Fazer uma nova branch
    git checkout -b adiciona-estilos

Fazer o css e fazer o commit
    styles.css
    git add .
    git commit -m "Adiciona estilos"
    git tag v1.1.0

voltar para a master e fazer o merge
    git checkout master
    git merge adiciona-estilos

fazer pag sobre
    git checkout -b adiciona-pag-sobre
    sobre.html
    git add sobre.html
    git commit -m "Adiciona a página de sobre"
    git tag v1.2.0

voltar para a master e fazer o merge
    git checkout master
    git merge adiciona-pag-sobre

fazer pag contato
    git checkout -b adiciona-pag-contato
    contato.html
    git add contato.html
    git commit -m "Adiciona a página de contato"
    git tag v1.3.0

voltar para a master e fazer o merge
    git checkout master
    git merge adiciona-pag-contato

subir modo remoto
    git remote add origin git@github.com:LuigiBergozza/luigibergozza.github.com.git
    git remote = para ver se o repo foi add
    git push origin master
        ele vai detectar a new branch master -> master

no github no repo ir na pag PAGE
    Branch: master /(root)
Fazer um README.md
    git add README.md
    git commit -m "add README.md"
    git tag 1.5.0
    git push origin master
*/