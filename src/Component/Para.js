import React, {useState} from "react";

export default function Para() {

    const [code, setCode] = useState("")



    //codemsghide

    const [msghide, setMsg] = useState({
        color: "red",
        display: "none"
    })

    // code submit btn

    const [modal, setmodol] = useState("")


    // code submit 

    const codeSubmit = ()=>{
        if(code === "245490"){
            setmodol("modal")
            setblurry({
                filter: "blur(0px)",
              });

        }else{
            setmodol("")
            setblurry({
                filter: "blur(5px)",
              });

        }


    }





    

    const showcodemsg = ()=>{
        setMsg({
            color: "red",
            display: "block"
        })
    }


  


 const chngecode = (event)=>{
    console.log(event.target.value)
   setCode(event.target.value) 

 }


//   const removeblur = () => {
//     setblurry({
//       filter: "blur(0px)",
//     });
//   };

  const [blurry, setblurry] = useState({
    filter: "blur(5px)",
  });




  return (
    <div className="container">
        <h2 className="text-center">I WANT TO CONFESS SOMETHING....</h2>
      <p style={blurry}>
        That day when I first kissed your lips, I can’t even express my feeling
        still I will try like always. It is not just a kiss but a bunch of
        emotion for me. You know I can still feel like wow I can’t believe that
        we kissed and from that day when i close my eyes and think about it I
        feel like the most happiest person. That was a movement i will never
        forget. I feel like something magical that day. You know when our lips
        touch in a slow tender at that Moment my heart beat just stop for a sec
        like current waves is hitting me hard. You don’t know I was so nervous
        like I want to kiss but I don’t have any idea how I will but one thing I
        know that you are the one for me like my home. Every time I hear your
        voice or see your beautiful eyes I fall more in love with you and one
        thing I want to confess I always imagine kissing you like everyday I
        make scenerios but ab toh ahm ahm dream is not dream anymore ahm reality
        ban chuka hai • Tmhei toh pta hi hoga. When our lips touch like
        butterfies full family with relative and relative friends and whole
        butterfly town is running in my stomach…btana bh itna hard h yeh sb bs
        itna samj your smile and your eyes were enough to take me to a happy
        place that I wish I could go back to every day. I wish like you will
        kiss me one day and then you will kiss me again and again and again and
        again and again and again and again and again and again and again and
        again and again and again and again and again till the end. I just loved
        every minute of my life since the day you came into my life, you bring
        out the best in me and I love you for it. You know still I could not
        believe how lucky I was to have someone as special as you to love. I
        want to confess like from that day I am hungry for more I don’t know but I am
        hungry for your touch I just love it and mei ab bh asmaan mei hun tmhei
        pta hi hoga like jbse mei zameen pr aya hi nh like I am floating in the
        air just because of you I love you so so much and I have to say that
        it’s soo yumm tasty tasty ahm ahm. Its feel like my body left my soul
        whenever I touch you and my heart feel like yeyyyyy I hope mei tmhei
        theek se samjha paa rha hun lgta toh hai mujhe tumhei samj aaa rha hoga.
        I know it was just was a second but it took my breath away and gave me
        the most amazing feeling in the world It was perfect and sweet and
        beautiful just like you are. I never knew a kiss could feel so amazing
        and I can’t wait to kiss you again, forever and always and I am not a
        galat insaan I am just sharing my feeling please don’t judge me. Sach
        btaun toh I wanted to kiss you more and while hugging you nabs kese
        btaun it feel like the most precious feeling in the world like I don’t
        wanna feel anything else just you. Your touch is like the most precious
        thing for me. Daily I crave for your touch I am so desperate for your
        touch accept toh nh krna chata tha but I have to and sach btaun toh is
        time bh yeh sb btate huye I still crave for your hug. When we meet just
        give me long hug and lots of kisses without asking i really need it…your
        touch feels like therapy for me and I am soo glad to have you in my
        life. I love it when we hug, the way we fit together perfectly you are
        my one true love and I want to kiss you forever and ever until the end
        of time. My heart melts every time I look into your eyes you are the
        most beautiful girl I have ever known and my love for you grows every
        day and I wish I could take away all your pain and be by your side
        forever. You are one of a kind and so amazing and i will try till my
        last ki tmhei kabhi regret na ho apne decision pr never… I love you so
        much. You’ve brought more smiles and laughter into my life than I ever
        thought was possible like I can smile now by just seeing you pictures I
        feel so lucky so so so so lucky. You know when you care for me na I feel
        like the most luckiest person in the world. You can when we kissed na
        you kiss my soul when you touch me you touch my heart and when you stare
        into my eyes i feel like the most smartest person jo mei nh hun wo bh I
        know but I feel like that you make me smile when I’m sad. When I’m with
        you I’m happy for the rest of my life I want to share your love and be
        with you. You know when I am with you I feel so much calm like gussa bh
        nh ata I like happy genuinely happy and I feel peace like most peaceful
        time. My words cannot express the love I feel for you and I realize
        there are no words in the world that can describe it so Just come closer
        so I can kiss you again…uff ahm ahm sharam hi aa gyi likte likte. • You
        know when I’m not with you I can’t wait to be bhut hi dil krta h and
        when I’m with you I never want it to end like kabhi end hi na ho bas
        aese hi hum sath sath rahe till the end. I know kafi zyda kuch bol diya
        h mene bas meri galti nh h I just want to tell you how I feel so I am
        trying to express it still it’s not easy. You know u make my life easy
        and complete me in every way. Every day that we are together I fall even
        more madly in love with you and i promise to always and forever be
        patient with your faults just as you are patient with mine. I will love
        you every day of forever, so please never leave me. I have never met
        another girl that has made me feel the way you do. I want to show you
        how much I care for you every day and how important you are to me
        because I love you so so much. I want to kiss you and hold you and i
        want to run my hands through your hair and whisper into your ear how
        much I love you…kiss you tenderly and passionately. I want you, I need
        you, I love you with all my heart. You are my favorite person in the
        whole world and you are the most beautiful woman in the world. You make
        me smile when we are together that I can’t help but kiss your lips every
        chance I get. Nabs I think mene kuch zyda hi bol diya h bina astagfar
        kahe padh lena and please smile your smile is the most beautiful smile I
        have ever seen in my whole life. I Iove you with all my heart bas ab
        chup ho jana chahiye mujhe kafi zyda bol chuka mei… I love you so so so
        much.<hr /><span style={{color: "red"}}>Please Note this link will be expire soon so if you want to save it you can screenshot or screenrecord</span>
      </p>
      <div className="text-center">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop">
          Clear Text to Read
        </button>

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  HEY NABS
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h5>Write the code to read the Paragraph</h5>
                <input type="text" value={code} onChange={chngecode}/>
              </div>
              <div className="codemsg" style={msghide}>
                Make a video and send me to get code - Duration minimum 5 min
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss={modal} onClick={codeSubmit}>
                  Submit
                </button>
                <button type="button" className="btn btn-primary" onClick={showcodemsg}>
                  Get Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
