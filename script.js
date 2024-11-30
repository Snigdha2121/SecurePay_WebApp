function showSignUp() {
    document.getElementById('signup-container').style.display = 'block';
    document.getElementById('login-container').style.display = 'none';
}

function showLogin() {
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('signup-container').style.display = 'none';
}

function showReportBug() {
    alert('Thank you for reporting a bug! Please provide details in an email.');
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function signup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const phone = document.getElementById('signup-phone').value;
    const password = document.getElementById('signup-password').value;

    console.log(`Signup: ${name}, ${email}, ${phone}`);
    alert('Sign-up successful! Please login.');
    closeModal('signup-container');
}

function login() {
    const emailOrPhone = document.getElementById('login-email-or-phone').value;
    const password = document.getElementById('login-password').value;

    console.log(`Login: ${emailOrPhone}`);
    window.location.href = 'dashboard.html'; // Redirect to dashboard
}

function logout() {
    alert('You have been logged out.');
    window.location.href = 'index.html'; // Redirect to landing page
}

function navigateToChecker(type) {
    hideAllSections(); // Hide all sections before showing the next
    document.getElementById('checker-form-section').style.display = 'block';
    console.log(`Navigated to ${type} checker`);
}

function checkSecurity() {
    const name = document.getElementById('receiver-name').value;
    const upi = document.getElementById('receiver-upi').value;

    console.log(`Checking security for ${name}, ${upi}`);
    document.getElementById('security-result').innerText = 'Security check completed!';
}

function submitReport() {
    alert('Report submitted successfully!');
}

function updateSettings() {
    alert('Settings updated successfully!');
}

function showSection(section) {
    hideAllSections(); // Hide all other sections first
    document.getElementById(`${section}-section`).style.display = 'block';
}

function hideAllSections() {
    const sections = ['dashboard', 'report', 'settings', 'checker-form'];
    sections.forEach(sec => {
        document.getElementById(`${sec}-section`).style.display = 'none';
    });
}