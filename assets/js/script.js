var projectForm = $('#project-form')
var projectNameInput = $('#project-name-input')
var projectTypeSelect = $('#project-type-input')
var hourlyRateInput = $('#hourly-rate-input')
var dueDateInput = $('#due-date-input')
var timeDisplay = $('#time-display')
var projectModal = $('#project-modal')
var projectDisplay = $('#project-display')

var today = moment()

function renderTableData(name, projectType, hourlyRate, dueDate) {
    // create a tr
    var tr = $('<tr>');
    // create a td (cell) for each piece of data and append tds into tr
    $('<td>').text(name).appendTo(tr);
    $('<td>').text(projectType).appendTo(tr);
    $('<td>').text(hourlyRate).appendTo(tr);
    $('<td>').text(dueDate).appendTo(tr);
    // cell for days until due date
    var daysLeft = moment(dueDate).diff(today, 'days');
    $('<td>').text(daysLeft).appendTo(tr);
    // cell for potential total earnings ($) = hourlyRate * 8
    var potentialEarnings = (hourlyRate * 8) * daysLeft;
    $('<td>').text('$' + potentialEarnings).appendTo(tr);
    // append tr into tbody
    projectDisplay.append(tr);
}

function handleSubmit(event) {
    event.preventDefault();

    var name = projectNameInput.val();
    var projectType = projectTypeSelect.val();
    var hourlyRate = hourlyRateInput.val();
    var dueDate = dueDateInput.val();

    renderTableData(name, projectType, hourlyRate, dueDate)

    projectModal.modal('hide');

    projectNameInput.val("");
    projectTypeSelect.val("");
    hourlyRateInput.val("");
    dueDateInput.val("");
}

projectForm.on('submit', handleSubmit);


// setting current data and time in header
timeDisplay.text(today.format('MMM Do YYYY | hh:mm:ss a'));


dueDateInput.datepicker({ minDate: 0});


