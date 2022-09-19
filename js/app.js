/**
 * Storing Both Gradients & Paragraphs in 2 different arrays
 * Stored under criteria of 80 character maximum in each line
*/
const gradients__arr = [
    `background: #20002c;
background: -webkit-linear-gradient(to bottom, #cbb4d4, #20002c);
background: linear-gradient(to bottom, #cbb4d4, #20002c);
`,
    `background: #C33764;
background: -webkit-linear-gradient(to bottom, #1D2671, #C33764);
background: linear-gradient(to bottom, #1D2671, #C33764);
`,
    `background: #200122;
background: -webkit-linear-gradient(to bottom, #6f0000, #200122);
background: linear-gradient(to bottom, #6f0000, #200122);
`,
    `background: #0575E6;
background: -webkit-linear-gradient(to top, #021B79, #0575E6);
background: linear-gradient(to top, #021B79, #0575E6);
`,
    `background: #43C6AC;
background: -webkit-linear-gradient(to top, #191654, #43C6AC);
background: linear-gradient(to top, #191654, #43C6AC);
`,
    `background: #ff00cc;
background: -webkit-linear-gradient(to top, #333399, #ff00cc);
background: linear-gradient(to top, #333399, #ff00cc);
`,
    `background: #de6161;
background: -webkit-linear-gradient(to top, #2657eb, #de6161);
background: linear-gradient(to top, #2657eb, #de6161);
`,
    `background: #e96443;
background: -webkit-linear-gradient(to top, #904e95, #e96443);
background: linear-gradient(to top, #904e95, #e96443);
`,
    `background: #2196f3;
background: -webkit-linear-gradient(to bottom, #f44336, #2196f3);
background: linear-gradient(to bottom, #f44336, #2196f3);
`,
    `background: #16BFFD;
background: -webkit-linear-gradient(to top, #CB3066, #16BFFD);
background: linear-gradient(to top, #CB3066, #16BFFD);
`,
    `background: #1D4350;
background: -webkit-linear-gradient(to top, #A43931, #1D4350);
background: linear-gradient(to top, #A43931, #1D4350);
`,
    `background: #C04848;
background: -webkit-linear-gradient(to top, #480048, #C04848);
background: linear-gradient(to top, #480048, #C04848);
`
];

const paragraphs__arr = [
    `There were little things that she simply could not stand.
   The sound of someone tapping their nails on the table.
    A person chewing with their mouth open. Another human
    imposing themselves into her space.
     She couldn't stand any of these things,
      but none of them compared to the number one
      thing she couldn't
      stand which topped all of them combined.
`,
    `The picket fence had stood for years without any issue.
   That's all it was. A simple, white, picket fence.
    Why it had all of a sudden become a lightning rod
    within the community was still unbelievable to most.
     Yet a community that had once lived in harmony
     was now divided in bitter
      hatred and it had everything to do
      with the white picket fence.
`,
    `Sleeping in his car was never the plan but
  sometimes things don't work out as planned.
   This had been his life for the last three
   months and he was just beginning to get used to it.
    He didn't actually enjoy it, but he had
    accepted it and come to terms with it.
     Or at least he thought he had. All that
     changed when he put the key into the ignition,
      turned it and the engine didn't make a sound.
`,
    `I'm heading back to Colorado tomorrow after
  being down in Santa Barbara over the
  weekend for the festival there.
   I will be making October plans once there
   and will try to arrange so I'm back here
   for the birthday if possible.
    I'll let you know as soon as I know the
    doctor's appointment schedule and my flight plans.
`,
    `The rain was coming.
   Everyone thought this would be a good thing.
    It hadn't rained in months
    and the earth was dry as a bone.
     It wasn't a surprise that everyone
     thought a good rain was what was needed,
      but they never expected how
      much rain would actually arrive.
`,
    `"Are you getting my texts???" she texted to him.
   He glanced at it and chuckled under his breath.
    Of course he was getting them,
    but if he wasn't getting them,
     how would he ever be able to answer?
     He put the phone down and continued on his project.
      He was ignoring her texts and he planned to continue to do so.
`,
    `It was always the Monday mornings.
   It never seemed to happen on Tuesday morning,
    Wednesday morning, or any other morning during the week.
     But it happened every Monday morning like clockwork.
      He mentally prepared himself
      to once again deal with what was about to happen,
       but this time he also placed a knife in his pocket just in case.
`,
    `It all started with a random letter.
   Several of those were joined forces to create a random word.
    The words decided to get together and form a random sentence.
     They decided not to stop there and it
     wasn't long before a random paragraph had been cobbled together.
      The question was whether or not they could
      continue the momentum long enough to create a random short story.
`,
    `Dave wasn't exactly sure how he had
  ended up in this predicament.
   He ran through all the events that
   had lead to this current situation
   and it still didn't make sense.
   He wanted to spend some time to try
   and make sense of it all,
    but he had higher priorities at the moment.
    The first was how to get out of his
    current situation of being naked in a tree with
     snow falling all around and no way for him to get down.
`,
    `According to the caption on the
  bronze marker placed by the
  Multnomah Chapter of the
   Daughters of the American
    Revolution on May 12, 1939, “College Hall (is) the oldest
    building in continuous use
    for Educational purposes west of the Rocky Mountains.
     Here were educated men
     and women who have won recognition throughout the world in all the
      learned professions.”
`
];

/**
 * Declaring Sections Generator Globals && function
 * The function takes section__incremental__counter value , increment it by one.
 * Assign the innerHtml of the sections using template literals, array picking random elements formula.
 * the function injects the html content using insertAdjacentHtml
 * then the function picks random css gradient from the array then assign it to the style of section
 * also i added 2 duplicate if statements to check if the section gradient is similar to the one assigned to the prev section and change it if true
 */
let section__incremental__counter = 0;
function sections__generator() {
    section__incremental__counter++;
    // as shown below i used the formula of picking random array element to assign random paragraph for each section
    const section__innerHTML = `<section class="gradient__${section__incremental__counter}" data-link-content="Section ${section__incremental__counter}" data-active="section__${section__incremental__counter}" id="section__${section__incremental__counter}">
            <h1>Section ${section__incremental__counter}</h1>
            <p>${
        paragraphs__arr[
            Math.floor(Math.random() * paragraphs__arr.length)
            ]
    }</p>
        </section>`;
    document
        .querySelector("footer")
        .insertAdjacentHTML("beforebegin", section__innerHTML);
    // Picking random gradient then add it to the ccs Text
    document.querySelector(
        `.gradient__${section__incremental__counter}`
    ).style.cssText =
        gradients__arr[Math.floor(Math.random() * gradients__arr.length)];
    /**
     * i used duplicate if statements as a filter to avoid gradients duplication for consecutive sections
     */
    if (
        section__incremental__counter > 1 &&
        document.querySelector(`.gradient__${section__incremental__counter}`).style
            .cssText ===
        document.querySelector(`.gradient__${section__incremental__counter - 1}`)
            .style.cssText /** inorder to prevent duplication of gradients*/
    ) {
        document.querySelector(
            `.gradient__${section__incremental__counter}`
        ).style.cssText =
            gradients__arr[Math.floor(Math.random() * gradients__arr.length)];
    }
    if (
        section__incremental__counter > 1 &&
        document.querySelector(`.gradient__${section__incremental__counter}`).style
            .cssText ===
        document.querySelector(`.gradient__${section__incremental__counter - 1}`)
            .style.cssText /** inorder to prevent duplication of gradients*/
    ) {
        document.querySelector(
            `.gradient__${section__incremental__counter}`
        ).style.cssText =
            gradients__arr[Math.floor(Math.random() * gradients__arr.length)];
    }
}
/**
 * Declaring navItems generator
 */
function nav__links__generator() {
    document.querySelector(".nav__bar__ul__list").innerHTML = "";
    document.querySelectorAll("section").forEach((section) => {
        const nav__links__innerHTML = `<li class="nav__bar__list__items" data-nav="${section.id}"><a href="#${section.id}" data-nav="${section.id}">${section.dataset.linkContent}</a></li>`;
        document
            .querySelector(".nav__bar__ul__list")
            .insertAdjacentHTML("beforeend", nav__links__innerHTML);
    });
}
/**
 * Declaring the sobserver structure
 * i used intersection observer api with isIntersecting property for the observation
 * first making declaring the options object using threshold percentage of 52% of the observed sections
 */

function view__port__tracker() {
    const options = {
        threshold: 0.52, // assigning the percentage of element required in vh to 57%
    };
    // Making new copy of the intersection observer Object....
    const intersection__observer__object = new IntersectionObserver((elements) => {
        // Looping allOver the observed elements which here are [sections]
        elements.forEach(element => {
            // Checking if the section is being observed
            if (element.isIntersecting) {
                // If its being observed --> Add the {your__active__class} to the section
                element.target.classList.add('your__active__class');
                // and add {active} class for the nav item with the same data of the observed section
                document.querySelector(`[data-nav=${element.target.id}]`).classList.add('active');
            }
            else{
                // if the section is not being observed ==> not in the main View Port then remove the both classes
                element.target.classList.remove('your__active__class');
                document.querySelector(`[data-nav=${element.target.id}]`).classList.remove('active');
            }

        });
    }, options);
    // looping over the section to check if is intersecting
    document.querySelectorAll('section').forEach(section => {
        intersection__observer__object.observe(section);
    });
}
/**
 * Building the scrollInto feature
 */
document.querySelector('.nav__bar__ul__list').addEventListener('click', (event) => {
    // preventing the default scroll event
    event.preventDefault();
    // if statement to check if the clicked section is a link by checking the childNode array length is one so there is just one child which is text child
    if (event.target.childNodes.length === 1) {
        document
            .getElementById(`${event.target.dataset.nav}`)
            // and Scroll to its section using scrollIntoView amazing func. with the options smooth scrolling and element centralizing options below
            .scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            });
    }
});

/**
 * Functions executing && button manipulation
 */
for (let i = 1; i < 5; i++) sections__generator();
nav__links__generator();
view__port__tracker();

// adding the click event listener for the addSections button
document.querySelector(".add__sections__btn").addEventListener("click", () => {
    sections__generator();
    nav__links__generator();
    view__port__tracker();
});
