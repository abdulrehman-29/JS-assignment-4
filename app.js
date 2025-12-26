var display = document.getElementById('output')

function q1() {
    var names = []

    display.innerHTML = "<span class='highlight'>Literal Array:</span> [ " + names + " ]";
}

function q2() {
    var names = new Array();

    display.innerHTML = "<span class='highlight'>Object Array </span> object (new Array())"
}

function q3() {
    var items = ["Apple", "Mango", "Grape"]

    display.innerHTML = "<span class='highlight'>String Array:</span><br>" + items.join(" | ")
}

function q4() {
    var nums = [10, 20, 30]

    display.innerHTML = "<span class='highlight'>Number Array:</span><br>" + nums.join(" - ")
}

function q5() {
    var bools = ["true", "false"]

    display.innerHTML = "<span class='highlight'>Boolean Array: </span><br>" + bools.join(", ")
}

function q6() {
    var mixed = ["true", 10, "Apple"]

    display.innerHTML = "<span class='highlight'>Mixed Array: </span><br>" + mixed.join(" / ")
}

function q7() {
    var qualification = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M. Phil", "PhD"]

    display.innerHTML = "<span class='highlight'>Educational Qualifications : </span><br>" +
        "1) " + qualification[0] + "<br>2) " + qualification[1] + "<br>3) " + qualification[2] + "<br>4) " + qualification[3] + "<br>5) " + qualification[4] + "<br>6) " + qualification[5] + "<br>7) " + qualification[6] + "<br>8) " + qualification[7]
}

function q8() {
    var student = ["Michael", "Jhon", "Tony"]
    var student_num = [320, 230, 480]

    percentage = [(student_num[0] / 500) * 100, (student_num[1] / 500) * 100, (student_num[2] / 500) * 100,]

    display.innerHTML = "<div class='highlight'>Student Progress:</div>" +
        "Score of " + student[0] + " is " + student_num[0] + ". Percentage: " + percentage[0] + "%<br>" +
        "Score of " + student[1] + " is " + student_num[1] + ". Percentage: " + percentage[1] + "%<br>" +
        "Score of " + student[2] + " is " + student_num[2] + ". Percentage: " + percentage[2] + "%<br>"
}

function q9() {
    var color = ["Red", "Green", "Blue", "Orange"]
    var colors = ["Red", "Green", "Blue", "Orange"]

    var startColor = prompt("Enter a color to add to the beginning:")
    colors.unshift(startColor)

    var endColor = prompt("Enter a color to add to the end:")
    colors.push(endColor)

    // Delete the last color
    colors.pop()

    var indexToAdd = prompt("At which index do you want to add a color?")
    var colorName = prompt("Enter the color name:")

    colors.splice(indexToAdd, 0, colorName)

    display.innerHTML = "<span class='highlight'>Array Colors:  </span>" + color.join(" | ") + "<br><br>" +
        "<span class='yellow'>Final Updated Array:  </span>" + colors.join(" | ")

}

function q10() {
    var unsortedArray = [320, 230, 480, 120]
    var sortedArray = unsortedArray.sort()

    display.innerHTML = "<span class='highlight'>Un-Sorted Array:</span>  " + unsortedArray.join(", ") + "<br>" +
        "<span class='yellow'>Sorted Array:</span>  " + sortedArray.join(", ")
}

function q11() {
    var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]

    display.innerHTML = "<span class='highlight'>Cities List:</span> <br>" + cities + "<br><br>" +
        "<span class='yellow'>Selected Cities List:</span> <br>" + cities.slice(2, 4)
}

function q12() {
    var catArray = ["This", "is", "my", "cat"]

    display.innerHTML = "<span class='highlight'>Array:  </span>" + catArray + "<br><br>" +
        "<span class='yellow'>Join String:  </span>" + catArray.join(" ")
}

function q13() {
    var devices = ["keyboard", "mouse", "printer", "monitor"]

    display.innerHTML = "<span class='highlight'>Devices: </span>" + devices + "<br><br>" +
        "<span class='color'>Out: </span>" + devices.shift() + "<br>" +
        "<span class='color'>Out: </span>" + devices.shift() + "<br>" +
        "<span class='color'>Out: </span>" + devices.shift() + "<br>" +
        "<span class='color'>Out: </span>" + devices.shift() + "<br>"
}

function q14() {
    var devices = ["keyboard", "mouse", "printer", "monitor"]

    display.innerHTML = "<span class='highlight'>Devices: </span>" + devices + "<br><br>" +
        "<span class='color'>Out: </span>" + devices.pop() + "<br>" +
        "<span class='color'>Out: </span>" + devices.pop() + "<br>" +
        "<span class='color'>Out: </span>" + devices.pop() + "<br>" +
        "<span class='color'>Out: </span>" + devices.pop() + "<br>"
}

function q15() {
    var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

    display.innerHTML = "<select>" +
        "<option>" + phone[0] + "</option>" +
        "<option>" + phone[1] + "</option>" +
        "<option>" + phone[2] + "</option>" +
        "<option>" + phone[3] + "</option>" +
        "<option>" + phone[4] + "</option>" +
        "<option>" + phone[5] + "</option>" +
        "</select>"
}