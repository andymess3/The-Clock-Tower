function renderTime () {

	var currentTime = new Date();
	var diem = "AM";
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();

	if (h == 0) {
		h = 12;
	} else if (h > 12) {
		h = h - 12;
		diem = "PM";
	} if (m < 10) {
		m = "0" + m;
	} 

	var myClock = document.getElementById("clockDisplay");
	myClock.textContent = h + ":" + m + " " + diem;
	setTimeout("renderTime()", 1000); 

}
renderTime();

//this is the popup with reference to the hour of the day 

var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("demo").innerHTML = days[d.getDay()];

var monkHour = new Date();
document.getElementById("demo").innerHTML = monkHour.getHours();
if (monkHour.getHours() === 3) {
	alert("3:00 am to 4:00 am is the hour of Vigils, a devtional watching, or keeping awake, during the customary hours of sleep. Sometimes Vigils are held are held on the eve before a church holy day. Look below for prayers, scripture readings and songs for the hour.");
} else if (monkHour.getHours() === 6) {
	alert("6:00 am to 7:00 am is the hour of Lauds. A daily office which takes place in the early morning, usually dawn. It is time to celebrate the coming of a new day, no matter how dark or long the night. Look below for prayers, scripture readings and songs for the hour.");
} else if (monkHour.getHours() === 9) {
	alert("9:00 am to 10:00 am is the hour of Terce. A fixed time of prayer, Terce refers to the 3rd hour after dawn. It also marks the first hour of Jesus' crucifixion. Look below for prayers, scripture readings and songs for the hour.");
} else if (monkHour.getHours() === 12) {
	alert("12:00 pm to 1:00 pm is the hour of Sext. Marking the middle of the day, this 6th hour after dawn is often seen as the culmination of the day. It is customary to use this as an occasion for rest. Look below for prayers, scripture readings and songs for the hour.");
} else if (monkHour.getHours() === 15) {
	alert("3:00 pm to 4:00 pm is the hour of None. Typically regarded as the close of the day's business and a time to prepare for the night. It marks also the hour of Christ's death. Look below for prayers, scripture readings and songs for the hour.");
} else if (monkHour.getHours() === 19) {
	alert("7:00 pm to 8:00 pm is the hour of Vespers. A sunset evening service, giving thanks for the day that was, and draws courage for the coming night. Look below for prayers, scripture readings and songs for the hour.");
} else if (monkHour.getHours() === 21) {
	alert("9:00 pm to 10:00 pm is the hour of Compline. A time where silence and spiritual peace are emphasized, as well as a willingness to accept the night. Look below for prayers, scripture readings and songs for the hour.");
} else {
	alert("There are no prayers this hour. You are invited to work, play, rest, eat, read, watch tv and/or call your mother. Please check back in little while.");
}

//prayer generators
//vigils

function vigilsPrayerGenerator () {

var randomNumber=Math.floor(Math.random()*3);
if (randomNumber === 0) {
	document.getElementById("vigils").innerHTML = "You stand alert at the gate of our hearts. Tutor us in the fine art of keeping vigil that we may lovingly watch over the family of the earth with your own eyes of compassionate awareness. With you as our guide, perhaps our loving vigilence will enable us to become healers in a world of violence. Be present in the lives of those whose darness is not a holy darkness. Be with those who never get to experience the theraputic healing of the Great Silence.<br><br>We surrender our own plans and enter your great plan for peace upon the earth. Give us attentive, peaceful hearts as we watch with you through the long dark night. We Bless You O Sacred Darkness."
}  if (randomNumber === 1) {
	document.getElementById("vigils").innerHTML = "Take me down deep to the holy darkness of Love's roots. Let me become one with the One I love. Draw me into the depths. Night prayer is deep prayer. Let me go deep. Teach me the art of waiting with patience that I may grown strong, loving and wise.<br><br>Let me borrow your eyes, O Beloved. Then I shall see in the dark."
} if (randomNumber === 2) {
	document.getElementById("vigils").innerHTML = "Summonded from sleep<br>in the heart of night<br>my name is called<br>and, like Samuel,<br>I rise from my bed<br>seeking the caller.<br><br>Summonded from sleep<br>I am drawn into<br>the beating heart<br>of the One<br>who called me.<br><br>The angel of night<br>lights a candle in my soul<br>inviting me to listen<br>to the wordless song<br>of Divine Union.<br><br>Deep healing.<br>Deep listening.<br>Deep waiting.<br>Deep watching.<br>All of these become<br>a part of my night watch.<br><br>In the heart of the night<br>you prepare me to be<br>your deep healing<br>for all who watch<br>through the night<br>of their fears."
} else {}

}

vigilsPrayerGenerator();

//lauds

function laudsPrayerGenerator () {

var randomNumber=Math.floor(Math.random()*3);
if (randomNumber === 0) {
	document.getElementById("lauds").innerHTML = "Annointed by your morning light I lift my spirit to receive the gift of this new day. Open my eyes to the beauty that surrounds me that I may walk through this day with the kind of awareness that calls forth grateful living. In all of creation let me see the brightness of your face.<br><br>Shine in my heart and on my life, filling me with joy, creativity, hope and laughter. Draw me into the radiant glory of your presence and into the small lights of those who are discouraged. May I live with the kind of presence that enables others to fell at home. Great Dawn of God, hear my prayer. "
}  if (randomNumber === 1) {
	document.getElementById("lauds").innerHTML = "O Morning Song of Love, O you in who we live and move and have our being! We have been asleep too long. Heal the unseeing part of our lives. Lead us to our awakening places.<br><br>Awaken us to the new light. Open the doors of our hearts, the windows of our souls, the walls of our minds. Awaken our hope. Awaken us to joy. Awaken us to love. Awaken us to new insights. Make our hearts ready to receive the brightness of your presence. To you we give praise."
} if (randomNumber === 2) {
	document.getElementById("lauds").innerHTML = "The words of Kahlil Gibran are sitting at the gate of my heart this morning: 'To wake at dawn with a winged heart and give thanks for another day of loving.' However, I don't consistently awaken with a winged heart and give thanks for another day of loving. There are times when the wings of my heart remail folded; yet prayer still happens in me. There are mornings when I simply sit in silence tyring to remember some of the things that need to rise in me: <br>--a tolerance for those who don't agree with me,<br>--a refusal to judge others,<br>--a willingness to forgive,<br>--greater effort to live with a non-violent heart<br>--loving thoughts for those who don't exactly dote on me,<br>--a calm and hopeful spirit in the midst of my anxieties,<br>--discipline in my daily personal prayer,<br>--attention and faithfulness in my daily work,<br>--a holy anger for injustice in our world,<br> As I remember these necessary risings in my life, the wings of my heart slowly begin to unfold. All praise to You, Giver of the Morning!"
} else {}

}

laudsPrayerGenerator();

//terce

function tercePrayerGenerator () {

var randomNumber=Math.floor(Math.random()*3);
if (randomNumber === 0) {
	document.getElementById("terce").innerHTML = "The fresh beginnings of this day embrace us as we stop for this midmorning pause. Bless the work that awaits us. Anoint our hands, hearts and minds as we joyfully enter into the heart of this day. Make our spirits lucid, attentive and opento all that can be. Breathe on us and strengthen us for our pilgrimage through the day. Come into our potential with your wind and flame. In Christ's name we pray."
}  if (randomNumber === 1) {
	document.getElementById("terce").innerHTML = "I long to live in the present moment. I want to stop trying to control the hours so that new paths of inspiration are free to unfold within me. I want to remember that I have the potential to be a blessing in the lives of those with whom I live and work.<br><br>Take my scattered thoughts, my fragmented moments. Breathe into them and draw them into your centered heart. Open my eyes that I may see the grace that waits for me in every moment. You are the Source of every moment's blessing. Teach me to live awake. Anoint the moments of my day. May this prayer come true in my life."
} if (randomNumber === 2) {
	document.getElementById("terce").innerHTML = "An artist would scuplt or paint you<br>and make of you an image<br>worthy of a gaze<br>intent enough<br>to behold all of your<br>wonder in just one glance.<br><br>A poet would fashion you into<br>a sonnet or a cinquain,<br>an ode or a sestine,<br>or maybe a ghazal<br>with just enough words<br>to utter you in,<br> to proclaim you forth,<br>sweetly.<br><br>But I have only this work<br>here, day after day,<br>to attend<br>and out of this daily<br>drudgery must lift<br>tired hands<br>and pull you<br>out of sheer possibility,<br>a task so difficult that<br>some days<br>my open heart<br>gapes<br>and nothing but the swish of<br>the Spirit's breath moving through<br>me could ever energize this effort<br>enough to call it a masterpiece."
} else {}

}

tercePrayerGenerator();

//sext

function sextPrayerGenerator () {

var randomNumber=Math.floor(Math.random()*3);
if (randomNumber === 0) {
	document.getElementById("sext").innerHTML = "In this hour of no shadows, gather us into the guesthouse of your great heart and enable us to see all that waits fo rus in the brightness of your presence. Heart of Our Hearts, teach us to take heart at this high noon moment. Restore our courage and create in us nonviolent hearts that we may better serve your people. In the name of Jesus who asked us to take heart. Amen. "
}  if (randomNumber === 1) {
	document.getElementById("sext").innerHTML = "All peoples, all nations, all seasons, all years, all hours and days -- you, who have invited us to love, hear our cry! Listen to our prayer. Make our spirits free, our hearts open, our mids health, our souls awake. Then we will be able to love as you have asked: with all our hearts, all ou rminds, all our souls. The 'all' is frieghtening, yet in our deepest moments of truth we know that htis is what we desire. O God of all, hear us. In Christ's name we pray."
} if (randomNumber === 2) {
	document.getElementById("sext").innerHTML = "Sometimes prayers that may seem old and outdated can, if you take them apart, bring forth new images. The Angelus is such a prayer. Very simply it asks that grace be poured into our hearts like water from a pitcher. It is the grace of God's life that we ask to be poured upon us. This grace is a reminder that just as an angel once brought the news of God's presence budding forht upon the earth in ewnways, that same miracle of life continues as we discover that we are constantly being brought to new life through our daily living. The following questions may help you gain new insights into the universality of the Angelus prayer.<br><br>- Name the angels who have brought you good news this week.<br><br>- Are you open to the presence of the spirit in your life?<br><br>- What is the promise of the Spirit for you?<br><br>- Can you see yourself as messenger or servant of the Holy One?<br><br>- Can you heart God saying of you, 'Behold her; behold him'<br><br>- What kind of surrender is happening in you?√√<br><br>- Do you ever expereience being called by a Word larger than your understanding?<br><br>- What is the newest Word that has become flesh in you, dwelling deep in the recesses of your being?"
} else {}

}

sextPrayerGenerator();

//none

function nonePrayerGenerator () {

var randomNumber=Math.floor(Math.random()*3);
if (randomNumber === 0) {
	document.getElementById("none").innerHTML = "In the evening of our lives send calming angels to shelter us and take away our fears. Lead us to 'the Old One,' who lovingly waits fo rus to embrace our deepest and truest selves. Teach us to die before we die so that our final death will be a great healing, drawing us into deeper life. Show us the face of surrender that we may know at the end of each day what to let go of and what to keep. O Soft Light of the Waning Sun, teach us the beautiful art of dying. Fill us with your own wisdom. In Christ's name we pray. Amen."
}  if (randomNumber === 1) {
	document.getElementById("none").innerHTML = "Give us the grance of tender seeing. Help us to recognize and honr the wise one who lives at the core of our being. May we always be open to being taught. May we be able to let go of our work at the end of the day. May we learn to bless and affirm each person who passes through the hours of our day. May we loves our fear of those things which are transient. May we learn the arti of living well and dying well. Teach us to en the day slowly, thoughtfully, gracefully. Soften the driven part of us that we may learn to relax and offer all we are and all we do as a bouquet of life at the close of each day. In the name of the Old One who lives in us, we pray."
} if (randomNumber === 2) {
	document.getElementById("none").innerHTML = "Standing in my evening vestibule<br>wrapped in fading light<br>I push Chronos out the door firmly.<br>Your time is up, I say<br>as I usher in my dear friend Kairos,<br>pulling her into a welcoming embrace.<br><br>Goodbye clock time,<br>tick-as-you-must time,<br>Hello grace time,<br>Swirling-spirals-of-sense time.<br> Set-my-heart-free time is<br>past due today.<br><br>Come in!<br>I know you cannot stay long<br>and I so yearn<br>to spend some moments wisely<br>in your comforting company.<br><br>Advise me,<br>hour of wisdom's beginning.<br>Impart your secrets of forgiveness,<br>Drench me with your sacred silence.<br>Remind me of my own steadfast spirit!<br><br>Reveal my task for this hour,<br>And then be on your way,<br>dear friend!<br>Move swiftly as I long<br>to clothe myself in your certainty,<br>to detain you forever as my faithful guide.<br><br>But alas, even you must be surrendered!"
} else {}

}

nonePrayerGenerator();

//vespers

function vespersPrayerGenerator () {

var randomNumber=Math.floor(Math.random()*3);
if (randomNumber === 0) {
	document.getElementById("vespers").innerHTML = "Come, sit at our table. Be present in the bread we break and share. It is our daily bread lifted out of both grace and struggle. It is the bread of compassion and joy, sorrow and courage. We bless you who have journeyed with us through the hours of this day. Now it is evening, and the day i salmost spent. Come to our supper table. Be our guest. Let us see your face in each of our table companions. At this Vespers hour light the lamps of our hearts and attend our deepest hungers. May it be so!."
}  if (randomNumber === 1) {
	document.getElementById("vespers").innerHTML = "As I take off my work clothes I put on a robe of gratitude. Thank you for all the blessing of this day, even those I have not yet recognized. Look kindly on the hourhold in which I live. Teach me to relase and hand over the day. I long to be part of the joy of this evening hour. The lamps of evening have been lit. Let me be your shinging as the day fades away. In Christ's name we pray."
} if (randomNumber === 2) {
	document.getElementById("vespers").innerHTML = "Twilight is the poet's hour,<br>twilight is the soul's deep love.<br>Light from heaven, accessible,<br>light and darness become one.<br><br>As the churtain of day falls away,<br>the churtain of night is rising.<br>In the falling and the rising<br>the star of God's face shines forth.<br><br>O blessed, holy twilight,<br>heaven's face unvieled.<br>Soft glow of sundown<br>night glow through sunray.<br><br>This is the mystical hour,<br>day fading; night rising.<br>Sweet space between day and night,<br>ask what you will and it shall be done.<br>This is the hour of grace."
} else {}

}

vespersPrayerGenerator();

//compline

function complinePrayerGenerator () {

var randomNumber=Math.floor(Math.random()*3);
if (randomNumber === 0) {
	document.getElementById("compline").innerHTML = "Let your comforting darkness embrace us this night. The beautiful prayer of this day is complete. This day's pilgrimage is ending, and we hold dear the lessons of the hours. Night has fallen. Breathe us into the good night. Calm our hearts. Comfort our souls. Protect us from danger. Fill us wih well-being. Anoint us with your loving protection. Receive our prayer. Amen. Amen."
}  if (randomNumber === 1) {
	document.getElementById("compline").innerHTML = "The arms of darkness hold us,<br>revealing now how dar we are.<br>O Beautiful Darkness. O Comforting Darkness.<br><br>Enfold us and hold us.<br>Inform us, transform us.<br>O Beautiful Darkness. O Comforting Darkness.<br><br>Surround us, all around us,<br>and hold our light like sky to star.<br>O Beautiful Darkness. O Comforting Darkness."
} if (randomNumber === 2) {
	document.getElementById("compline").innerHTML = "I am listening to the night. Everything is singing. Do yo uhear the little things with wings that fly through the air and live in the trees and meadows? Everything is humming the song of night. Do you hear tyour forest creatures and their night songs? Are we, you beloved creatures who can only fly in our imaginations, we, too, fly iwth joy to the refuge of your heart, singing our night songs. We sing to end the day. Each heart has a deep through that longs to pour forth melodies. O Divine Song Catcher, receive our songs of silent praise. Lay your hand upon our sols and give us rest."
} else {}

}

complinePrayerGenerator();



