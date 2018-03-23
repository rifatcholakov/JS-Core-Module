function phonebook() {
    const URL = "https://phonebook-f1294.firebaseio.com/";

    let phonebook = $("#phonebook");
    let loadBtn = $("#btnLoad");
    let createBtn = $("#btnCreate");

    loadBtn.on("click", loadData);
    createBtn.on("click", createContact);

    function loadData() {
        $.ajax({
            url: URL + ".json",
            success: loadPhonebook,
            error
        });

        function loadPhonebook(contacts) {
            phonebook.empty();

            for (let key in contacts) {
                let person = contacts[key].person;
                let phone = contacts[key].phone;

                generateListItem(person, phone, key);
            }
        }
    }

    function createContact() {
        let person = $("#person");
        let phone = $("#phone");

        let newContact = {
            person: person.val(),
            phone: phone.val()
        };

        let newContactJSON = JSON.stringify(newContact);

        let request = {
            method: "POST",
            url: URL + ".json",
            data: newContactJSON,
            success: appendContactToPhonebook,
            error
        };

        $.ajax(request);
        
        function appendContactToPhonebook() {
            generateListItem(person.val(), phone.val());

            person.val("");
            phone.val("");
        }
    }

    function generateListItem(person, phone, key) {
        let li = $(`<li>${person}: ${phone} </li>`);

        let deleteBtn = $(`<a href="#">[Delete]</a>)`);

        deleteBtn.on("click", deleteContact);

        li.append(deleteBtn);

        phonebook.append(li);

        function deleteContact() {
            $.ajax({
                method: "DELETE",
                url: URL + key + ".json",
                success: removeItem,
                error
            });

            function removeItem() {
                li.remove();
            }
        }
    }

    function error() {
        phonebook.empty();

        let li = $("<li>")
            .text("Error")
            .css("color", "red");

        phonebook.append(li.show().delay(3000).fadeOut());

    }
}

phonebook();