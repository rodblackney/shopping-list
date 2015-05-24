$(document).ready(function() {
  $('#new-value').on('keypress', function(evt) {
    if (evt.keyCode === 13) {
      addItem();
    }
  });

  $('#add-item').on('click', addItem);

  $('#clear-item').on('click', function() {
    var checked = $('#shopping-list input:checked'); // select all checked checkboxes
    var listItem = checked.parent(); // the LI element
    listItem.remove(); // remove the LI element that contains the checked checkbox
  });

  function addItem() {
    var newItem = $('#new-value').val();
    if (newItem === '') {
      return;
    }
    $('#shopping-list').append('<li><input type="checkbox" /> ' + newItem + '</li>');
    $('#new-value').val('');
  }
});