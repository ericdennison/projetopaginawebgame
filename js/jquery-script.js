//efeito de esconder formulário de cadastro

$(document).ready(function(){

    $('#botao-cadastrar').click(function(){

        $('#botao-voltar').show();
        $('#form-cadastrar').slideToggle('slow');
        $('#section-login').slideToggle('slow');
        $('#botao-cadastrar').hide();

      
    });

    $('#botao-voltar').click(function(){

        $('#botao-cadastrar').show();
        $('#form-cadastrar').slideToggle('slow');
        $('#section-login').slideToggle('slow');
        $('#botao-voltar').hide();
    })
});