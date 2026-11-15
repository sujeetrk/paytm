/**
 * Mobile Banking Application Logic
 * Interactive screen transitions & UPI PIN checking simulation
 */

let currentPin = '';
const MAX_PIN_LENGTH = 6;

// Switch screens smoothly
function switchScreen(screenId) {
  const allScreens = document.querySelectorAll('.screen-view');
  allScreens.forEach(screen => {
    screen.classList.remove('active');
  });

  const targetScreen = document.getElementById(`screen-${screenId}`);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }

  // Update top bar tabs if present
  const allTabs = document.querySelectorAll('.screen-tab');
  allTabs.forEach(tab => {
    if (tab.getAttribute('data-screen') === screenId) {
      tab.classList.add('active-tab');
    } else {
      tab.classList.remove('active-tab');
    }
  });

  // Scroll main container to top
  const container = document.getElementById('screens-container');
  if (container) {
    container.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Reset PIN input if returning to pin screen
  if (screenId === 'upi-pin') {
    resetPin();
  }
}

// Update visual dot indicators for PIN
function updatePinDots() {
  const dots = document.querySelectorAll('#pin-indicator-container .pin-dot');
  dots.forEach((dot, index) => {
    if (index < currentPin.length) {
      dot.classList.add('filled');
    } else {
      dot.classList.remove('filled');
    }
  });
}

// Press digit on virtual keypad
function pressPin(digit) {
  if (currentPin.length < MAX_PIN_LENGTH) {
    currentPin += digit;
    updatePinDots();
  }
}

// Backspace on virtual keypad
function backspacePin() {
  if (currentPin.length > 0) {
    currentPin = currentPin.slice(0, -1);
    updatePinDots();
  }
}

// Reset PIN
function resetPin() {
  currentPin = '';
  updatePinDots();
}

// Submit PIN and navigate to Balance Screen (Screen 5)
function submitPin() {
  // If PIN entered or even empty for quick demo testing
  const checkBtn = document.querySelector('button[onclick="submitPin()"]');
  if (checkBtn) {
    checkBtn.textContent = '...';
    checkBtn.disabled = true;
  }

  setTimeout(() => {
    if (checkBtn) {
      checkBtn.textContent = 'CHECK';
      checkBtn.disabled = false;
    }
    switchScreen('balance-result');
  }, 400);
}

// Listen for physical keyboard input on PIN screen
document.addEventListener('keydown', (e) => {
  const pinScreen = document.getElementById('screen-upi-pin');
  if (!pinScreen || !pinScreen.classList.contains('active')) return;

  if (e.key >= '0' && e.key <= '9') {
    pressPin(e.key);
  } else if (e.key === 'Backspace') {
    backspacePin();
  } else if (e.key === 'Enter') {
    submitPin();
  }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Start on home screen by default
  switchScreen('home');
});
