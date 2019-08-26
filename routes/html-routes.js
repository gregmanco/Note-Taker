



/*$.ajax("/api/notes", {
    type: "GET"
 }).then(function(data) {
    var noteTitle = $("#noteTitle");
    var noteBody = $("#noteText");
    console.log(noteTitle);
    console.log(noteBody);
    console.log(data)
    var notes = data.notes;
    var len = notes.length;
    for (var i = 0; i < len; i++) {
    var new_elem =
        "<li>" +
        notes[i].id +
        ". " + "<p>" + notes[i].title + "</p>" + "<p>" + notes[i].body + "</p>" +
        "<button class='delete-cat' data-id='" +
        notes[i].id +
        "'>DELETE!</button></li>";
        $("#noteView").append(new_elem)
    }
 });
 $(document).on("click", ".delete-cat", function(event) {
    var id = $(this).data("id");
    // Send the DELETE request.
    $.ajax("/api/notes/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("deleted cat", id);
      // Reload the page to get the updated list
      location.reload();
    });

    */

   