// ==========================================
// LANGUAGE SELECTION (sauvegarde uniquement, sans traduction)
// ==========================================
function setLanguage(lang) {
    // 1. Sauvegarder le choix pour la prochaine visite
    localStorage.setItem("selectedLanguage", lang);

    // 2. Mettre à jour le texte du bouton affiché (ex: "FR" -> "EN")
    const current = document.getElementById("languageCurrent");
    if (current) {
        current.textContent = lang.toUpperCase();
    }

    // 3. Marquer visuellement l'option active dans le menu déroulant
    const options = document.getElementById("languageOptions");
    if (options) {
        options.querySelectorAll("button").forEach(btn => {
            btn.classList.toggle("active", btn.dataset.lang === lang);
        });
    }

    // 4. Fermer le menu après sélection
    const selector = document.querySelector(".language-selector");
    if (selector) {
        selector.classList.remove("open");
    }

    // 5. Mettre à jour l'attribut lang du document (bon pour le SEO/accessibilité)
    document.documentElement.lang = lang;
}// ==========================================
// LANGUAGE DROPDOWN
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const selector =
        document.querySelector(".language-selector");

    const current =
        document.getElementById("languageCurrent");

    const options =
        document.getElementById("languageOptions");

    if (!selector || !current || !options) {
        return;
    }

    // Open / close
    current.addEventListener("click", (event) => {

        event.stopPropagation();

        selector.classList.toggle("open");
    });

    // Select language
    options.querySelectorAll("button").forEach(button => {

        button.addEventListener("click", () => {

            setLanguage(button.dataset.lang);
        });
    });

    // Close when clicking outside
    document.addEventListener("click", () => {

        selector.classList.remove("open");
    });

    // Load saved language
    const savedLanguage =
        localStorage.getItem("selectedLanguage") || "fr";

    setLanguage(savedLanguage);
});
// Modal Functions
function openContactModal() {
  document.getElementById('contactModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeContactModal() {
  document.getElementById('contactModal').classList.remove('active');
  document.getElementById('contactForm').reset();
  document.getElementById('formMessage').textContent = '';
  document.getElementById('formMessage').className = 'form-message';
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('contactModal');
  if (event.target === modal) {
    closeContactModal();
  }
}

// Handle form submission with Formspree
function handleContactForm(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  const formMessage = document.getElementById('formMessage');
  const submitBtn = event.target.querySelector('.btn-submit');
  
  // Validate form
  if (!name || !email || !subject || !message) {
    formMessage.textContent = 'Veuillez remplir tous les champs.';
    formMessage.className = 'form-message error';
    return;
  }
  
  // Disable submit button
  submitBtn.disabled = true;
  submitBtn.textContent = 'Envoi en cours...';
  
  // Send email using Formspree
  fetch('https://formspree.io/f/mnjekgge', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      subject: subject,
      message: message
    })
  })
  .then(response => {
    if (response.ok) {
      // Success
      formMessage.textContent = '✓ Message envoyé avec succès ! Je vous répondrai bientôt.';
      formMessage.className = 'form-message success';
      document.getElementById('contactForm').reset();
      submitBtn.disabled = false;
      submitBtn.textContent = 'Envoyer';
      
      // Close modal after 3 seconds
      setTimeout(() => {
        closeContactModal();
      }, 3000);
    } else {
      throw new Error('Erreur lors de l\'envoi');
    }
  })
  .catch(error => {
    // Error
    console.error('Erreur:', error);
    formMessage.textContent = '✗ Erreur lors de l\'envoi. Veuillez réessayer.';
    formMessage.className = 'form-message error';
    submitBtn.disabled = false;
    submitBtn.textContent = 'Envoyer';
  });
}

