document.addEventListener('DOMContentLoaded', ()=>{


        const productForm = document.getElementById('productForm');
        const productTable = document.getElementById('productTable').getElementsByTagName('tbody')[0];
        const newProductButton = document.getElementById('newProductButton');

        productForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const Nameproduct = document.getElementById('Nameproduct').value;
            const productDescription = document.getElementById('productDescription').value;
            const productValue = document.getElementById('productValue').value;
            const productAvailable = document.getElementById('productAvailable').value;

            /* Retorna na pagina os valores que eu preciso para compor a tabela */
            const newRow = productTable.insertRow();
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);
            const cell4 = newRow.insertCell(3);

            cell1.innerHTML = Nameproduct;
            cell2.innerHTML = productDescription;
            cell3.innerHTML = `R$ ${productValue}`;
            cell4.innerHTML = productAvailable;

            // Ordenação da tabela
            const rows = Array.from(productTable.querySelectorAll('tr')).slice(1);
            rows.sort((a, b) => parseFloat(a.cells[1].innerText.split(' ')[1]) - parseFloat(b.cells[1].innerText.split(' ')[1]));
            productTable.append(...rows);

            // Abrir a listagem automaticamente após cadastrar
            window.scrollTo(0,document.body.scrollHeight);

            // Limpar o formulário
            productForm.reset();
        });

/*Serve para rolar a pagina para o inicio caso tenham muitos produtos cadastrados */

        newProductButton.addEventListener('click', function() {
            window.scrollTo(0,0);
        });
    });

