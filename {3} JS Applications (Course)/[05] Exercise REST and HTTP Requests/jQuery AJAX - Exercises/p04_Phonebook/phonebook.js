function attachEvents() {
    const URL = "https://phonebook-nakov.firebaseio.com/phonebook";

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
            loadData();

            person.val("");
            phone.val("");
        }
    }

    function generateListItem(person, phone, key) {
        let li = $(`<li>${person}: ${phone} </li>`);

        let deleteBtn = $(`<button>[Delete]</button>)`);

        deleteBtn.on("click", deleteContact);

        li.append(deleteBtn);

        phonebook.append(li);

        function deleteContact() {
            $.ajax({
                method: "DELETE",
                url: URL + "/" + key + ".json",
                success: removeItem,
                error
            });

            function removeItem() {
                loadData();
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

attachEvents();