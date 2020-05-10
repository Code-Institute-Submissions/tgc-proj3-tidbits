function showlform(x) {
    $('#lform').show();
    $('#rform').hide();
    $(x).find('h3').css('border-bottom', '#FBB03B 5px solid');
    $(x).parents('#loginpanel').find('h3').eq(1).css('border-bottom', 'none');
}

function showrform(x) {
    $('#rform').show();
    $('#lform').hide();
    $(x).find('h3').css('border-bottom', '#FBB03B 5px solid');
    $(x).parents('#loginpanel').find('h3').eq(0).css('border-bottom', 'none');
}

function hideforms() {
    $('#loginpanel').fadeToggle(400);
    setTimeout(function () {
        $('#heroimage, #mainbody').fadeToggle();
    }, 600)
}
// toggle Login/Register Panel
function toggleLoginPanel(x) {
    $('#heroimage, #mainbody').fadeToggle(400);
    $('#loginpanel').fadeToggle(600);
}

// toggle heart
function likePlus(a) {
    //console.log($(a).parent().text())
    if ($(a).children('i').css('color') == 'rgb(33, 33, 33)') {
        $(a).children('i').css('color', 'rgb(255, 0, 0)')
        newLikes = parseInt($(a).parent().text()) + 1
        $(a).parent().children('span').text(newLikes.toString())
    } else if ($(a).children('i').css('color') == 'rgb(255, 0, 0)') {
        $(a).children('i').css('color', 'rgb(33, 33, 33)')
        newLikes = parseInt($(a).parent().text()) - 1
        $(a).parent().children('span').text(newLikes.toString())
    }

}

// alter topic list in select html
function onSubjChange() {
    let chosenSubj = $('#selectsubj').val()
    let physicstopics = ['All', 'Measurement', 'Newtonian Mechanics', 'Thermal Physics', 'Waves', 'Electricity & Magnetism']
    let chemtopics = ['All', 'Experimental Chemistry', 'Atomic Structure & Stoichiometry', 'Chemistry of Reactions', 'Periodicity', 'Atmosphere', 'Organic Chemistry']
    let geogtopics = ['All', 'Our Dynamic Planet', 'Our Changing World']
    let mathtopics = ['All', 'Number & Algebra', 'Geometry & Measurement', 'Statistics & Probablity']

    function appendTopics(subj) {
        for (topic of subj) {
            $('#selecttopics').append(`
            <option value='${topic}'>${topic}</option>
        `)
        }
    }

    $('#selecttopics').empty()

    if (chosenSubj == 'Physics') {
        appendTopics(physicstopics)
    } else if (chosenSubj == 'Chemistry') {
        appendTopics(chemtopics)
    } else if (chosenSubj == 'Math') {
        appendTopics(mathtopics)
    } else if (chosenSubj == 'Geography') {
        appendTopics(geogtopics)
    } else if (chosenSubj == 'All') {
        $('#selecttopics').empty()
    }


}

function onSubjChange2() {
    let chosenSubj = $('#selectsubjc').val()
    let physicstopics = ['Measurement', 'Newtonian Mechanics', 'Thermal Physics', 'Waves', 'Electricity & Magnetism']
    let chemtopics = ['Experimental Chemistry', 'Atomic Structure & Stoichiometry', 'Chemistry of Reactions', 'Periodicity', 'Atmosphere', 'Organic Chemistry']
    let geogtopics = ['Our Dynamic Planet', 'Our Changing World']
    let mathtopics = ['Number & Algebra', 'Geometry & Measurement', 'Statistics & Probablity']

    function appendTopics(subj) {
        for (topic of subj) {
            $('#selecttopicsc').append(`
            <option value='${topic}'>${topic}</option>
        `)
        }
    }

    $('#selecttopicsc').empty()

    if (chosenSubj == 'Physics') {
        appendTopics(physicstopics)
    } else if (chosenSubj == 'Chemistry') {
        appendTopics(chemtopics)
    } else if (chosenSubj == 'Math') {
        appendTopics(mathtopics)
    } else if (chosenSubj == 'Geography') {
        appendTopics(geogtopics)
    } 


}

$(function () {
    // hide login/register panel
    $('#loginpanel').hide()
    $('#rform').hide()
    $('#loginpanel').find('h3').eq(0).css('border-bottom', '#FBB03B 5px solid');

    // sprites appear on hover
    $('#toolbar a').eq(1).hover(function(){
        $('#createsprite').css('transform','translateY(-50px)')
    },function(){
        $('#createsprite').css('transform','translateY(0px)')
    })

    $('#toolbar a').eq(2).hover(function(){
        $('#searchsprite').css('transform','translateY(-50px)')
    },function(){
        $('#searchsprite').css('transform','translateY(0px)')
    })

    $('#toolbar a').eq(3).hover(function(){
        $('#notesprite').css('transform','translateY(-50px)')
    },function(){
        $('#notesprite').css('transform','translateY(0px)')
    })

    $('#toolbar a').eq(4).hover(function(){
        $('#likesprite').css('transform','translateY(-50px)')
    },function(){
        $('#likesprite').css('transform','translateY(0px)')
    })


    // summernote
    $('#summernote').summernote({
        placeholder: 'Start creating your note here!',
        tabsize: 2,
        height: 300,
        width: 700,
        toolbar: [
            // [groupName, [list of button]]
            ['style', ['style', 'bold', 'italic', 'underline', 'clear']],
            ['font', ['strikethrough', 'superscript', 'subscript']],
            ['fontname', ['fontname']],
            ['fontsize', ['fontsize']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']],
            ['insert', ['table']],
            ['view', ['fullscreen']]
        ]
    });





}) //jquery end