//Sticky Header
$(window).on("scroll load", function() {
    $(window).scrollTop() > $(".siteHeader").outerHeight()
      ? $(".siteHeader").addClass("sticky")
      : $(".siteHeader").removeClass("sticky");
  });
  // mobile menu js
  $(".mobileMenuTrigger").click(function() {
    $(".mobileMenuWrapperOuter").addClass("on");
    $("body").addClass("mobileMenuActive");
  });
  $(".mobileMenuCloseWrapper").click(function() {
    $(".mobileMenuWrapperOuter").removeClass("on");
    $("body").removeClass("mobileMenuActive");
  });

  //text affect

  function init () {

    wait(0).then(() => {
      clearText()
      typeText('  ').then(typeLoop)
    })
    
    function typeLoop() {
      typeText('Adventures!')
        .then(() => wait(2500))
        .then(() => removeText('Adventures!'))
        .then(() => typeText('Thrills!'))
        .then(() => wait(2500))
        .then(() => removeText('Thrills!'))
        .then(() => typeText('Escapes!'))
        .then(() => wait(2500))
        .then(() => removeText('Escapes!'))
        .then(() => typeText('Experiences!'))
        .then(() => wait(2500))
        .then(() => removeText('Experiences!'))
        .then(typeLoop)
    }
    
  }
  
  
  // Source code 🚩
  
  const elementNode = document.getElementById('type-text')
  let text = ''
  
  function updateNode () {
    elementNode.innerText = text
  }
  
  function pushCharacter (character) {
    text += character
    updateNode()
  }
  
  function popCharacter () {
    text = text.slice(0, text.length -1)
    updateNode()
  }
  
  function clearText () {
    text = ''
    updateNode()
  }
  
  
  function wait (time) {
    if (time === undefined) {
      const randomMsInterval = 100 * Math.random()
      time = randomMsInterval < 50 ? 10 : randomMsInterval
    }
    
    return new Promise(resolve => {
      setTimeout(() => {
        requestAnimationFrame(resolve)
      }, time)
    })
  }
  
  function typeCharacter (character) {
    return new Promise(resolve => {
      pushCharacter(character)
      wait().then(resolve)
    })
  }
  
  function removeCharacter () {
    return new Promise(resolve => {
      popCharacter()
      wait().then(resolve)
    })
  }
  
  function typeText (text) {
    return new Promise(resolve => {
      
      function type ([ character, ...text ]) {
        typeCharacter(character)
          .then(() => {
            if (text.length) type(text)
            else resolve()
          })
      }
      
      type(text)
    })
  }
  
  function removeText ({ length:amount }) {
    return new Promise(resolve => {
      
      function remove (count) {
        removeCharacter()
          .then(() => {
            if (count > 1) remove(count - 1)
            else resolve()
          })
      }
      
      remove(amount)
    })
  }
  
  
  init()
  