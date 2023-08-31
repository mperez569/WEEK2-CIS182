const $ = selector => document.querySelector(selector);

const joinList = evt =>
{
    alert("You just Joined the email list!");
}

const clearForm = () =>
{
    alert("You cleared the form");
    document.getElementById("email_1").focus();
}

document.addEventListener("DOMContentLoaded", () => {

    $("#join_list").addEventListener("click", joinList);
    $("#clear_form").addEventListener("click", clearForm);
    $("#email_1").focus();

});

