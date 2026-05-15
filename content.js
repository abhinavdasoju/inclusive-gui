console.log('hello')

// in inspector, right click and do copy > copy selector, and then paste into querySelector

function getEmail() {
    console.log("ready")
    
    //let emails = document.getElementsByClassName("tVu25")
    let emails_element = document.querySelector("div.tVu25 > .nH > .nH > .nH.aqk.aql.bkL > .nH.bkK > .nH > .nH.ar4.z > div > .AO > .Tm.aeJ > .aeF > div > .bGI.nH.oy8Mbf.aE3 > .UI > .aDP > .ae4.aDM > .Cp > div > table.F.cf.zt > tbody")
    emails = emails_element.children
    //console.log(emails)

    let read = emails_element.querySelectorAll("tr.zA.y0")
    console.log(read)

    let unread = emails_element.querySelectorAll("tr.zA.zE")
    console.log(unread)
    
    const email = unread[0]
    //console.log(email)

    const emailData = email.querySelector("td.yX.xY > .afn")
    //console.log(emailData)

    const senderName = emailData.querySelector(".bA4 > .zF").getAttribute("name")
    const senderEmail = emailData.querySelector(".bA4 > .zF").getAttribute("email")

    const subject = emailData.querySelector(".bqe").textContent
    const time = emailData.querySelector(".bq3").textContent
    const msg = emailData.childNodes[emailData.childNodes.length-1].textContent

    console.log("sender:", senderName, senderEmail)
    console.log("subject:", subject)
    console.log("time:", time)
    console.log("message:", msg)

    return {senderName, senderEmail, subject, time, msg}

    /*
    for (let i = 0; i < unread.length; i++) {
        const email = unread[i]
        //console.log(email)

        const emailData = email.querySelector("td.yX.xY > .afn")
        //console.log(emailData)

        const senderName = emailData.querySelector(".bA4 > .zF").getAttribute("name")
        const senderEmail = emailData.querySelector(".bA4 > .zF").getAttribute("email")

        const subject = emailData.querySelector(".bqe").textContent
        const time = emailData.querySelector(".bq3").textContent
        const msg = emailData.childNodes[6]

        console.log("sender:", senderName, senderEmail)
        console.log("subject:", subject)
        console.log("time:", time)
        console.log("message:", msg)
    }
    */
}

const overlay = document.createElement('div');
overlay.innerHTML = `
    <div id="gmail-extension-overlay">
        <p id="sender-name">

        </p>

        <p id="sender-email">

        </p>

        <p id="subject">

        </p>

        <p id="time">

        </p>

        <p id="message">

        </p>
    </div>
`

document.body.appendChild(overlay)

setTimeout(() => {
    const {senderName, senderEmail, subject, time, msg} = getEmail()

    document.getElementById("sender-name").textContent = senderName
    document.getElementById("sender-email").textContent = senderEmail
    document.getElementById("subject").textContent = subject
    document.getElementById("time").textContent = time
    document.getElementById("message").textContent = msg
}, 2000)