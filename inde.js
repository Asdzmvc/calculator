// const calculator = document.querySelector(‘.calculator’)
// const keys = calculator.querySelector(‘.calculator__keys’)

// keys.addEventListener(‘click’, e => {
//  if (e.target.matches(‘button’)) {
//    // Do something
//  }
// })

// if (action === 'decimal') {
//     console.log('decimal key!')
//   }
  
//   if (action === 'clear') {
//     console.log('clear key!')
//   }
  
//   if (action === 'calculate') {
//     console.log('equal key!')
//   }

// if (!action) {
//     if (displayedNum === '0') {
//       display.textContent = keyContent
//     } else {
//       display.textContent = displayedNum + keyContent
//     }
//   }

// keys.addEventListener('click', e => {
//     if (e.target.matches('button')) {
//       const key = e.target
//       // ...
      
//       // Remove .is-depressed class from all keys
//       Array.from(key.parentNode.children)
//         .forEach(k => k.classList.remove('is-depressed'))
//     }
//   })

// keys.addEventListener('click', e => {
//   if (e.target.matches('button')) {
//     // ...
    
//     if (
//       action === 'add' ||
//       action === 'subtract' ||
//       action === 'multiply' ||
//       action === 'divide'
//     ) {
//       key.classList.add('is-depressed')
//       // Add custom attribute
//       calculator.dataset.previousKeyType = 'operator'
//     }
//   }
// })