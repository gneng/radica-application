$(document).ready(() => {
    // render anonymous user
    renderUsers()

    // handle Add Button
    $("#input-form").on("click", "#input-btn", (e) => {
        // prevent submitting the form
        e.preventDefault();

        // check null user inputs
        if (invalidInputs()) return;

        // add user to users list
        let user = {
            id: $("#input-id").val(),
            name: $("#input-name").val(),
            occupation: $("#input-occupation").val()
        }
        users.push(user);

        // rerender the DOM again
        renderUsers();

        // increment user id
        $("#input-id").val(users.length)
    })

    // handle sorting
    $("#sort-select").on("change", () => {
        // retrieve data from select tag
        let selected = $("#sort-select").val()
        
        // filter depends on the option chosen
        switch(selected) {
            case 'id':
                users = users.sort((a, b) => { return a.id - b.id }); break;
            case 'name':
                users = users.sort((a, b) => { return a.name > b.name ? 1 : -1}); break;
            case 'occupation':
                users = users.sort((a, b) => { return a.occupation > b.occupation ? 1 : -1}); break;
            default: break;
        }

        // render the users table again
        renderUsers()
    })
})

const invalidInputs = () => {
    if (!$("#input-name").val() || !$("#input-occupation").val()) {
        return alert("Please fill in the UserName and UserOccupation");
    }
}

const renderUsers = () => {
    $("table").empty();
    users.map(res => {
        let userId = $("<td></td>").text(res.id);
        let userName = $("<td></td>").text( res.name );
        let userOccupation = $("<td></td>").text( res.occupation );
        let row = $("<tr></tr>").append(userId, userName, userOccupation);
        $("table").append(row);
    })
}

let users = [
    {
        id: '0',
        name: 'anonymous',
        occupation: 'programmer'
    }
]