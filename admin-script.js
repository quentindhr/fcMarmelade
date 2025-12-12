// Données de simulation
let vms = [];
let connectedUsers = [];
let activityLogs = [];

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    initializeAdmin();
    startAutoRefresh();
});

function initializeAdmin() {
    // Simuler quelques VMs par défaut
    addDefaultVMs();
    
    // Simuler des utilisateurs connectés
    simulateUsers();
    
    // Ajouter un log initial
    addLog('success', 'Panel admin chargé avec succès');
    
    // Mettre à jour l'heure
    updateTime();
    setInterval(updateTime, 1000);
    
    // Rafraîchir les données
    refreshDashboard();
}

function addDefaultVMs() {
    const defaultVMs = [
        {
            name: 'marmelade-web-prod',
            os: 'Ubuntu 22.04',
            cpu: 4,
            ram: 8,
            disk:  100,
            ip: '192.168.1.10',
            description: 'Serveur web principal',
            status: 'running'
        },
        {
            name: 'marmelade-db-01',
            os: 'Debian 11',
            cpu: 8,
            ram: 16,
            disk: 200,
            ip: '192.168.1.11',
            description: 'Base de données',
            status: 'running'
        }
    ];
    
    defaultVMs.forEach(vm => {
        vms.push({
            id: generateId(),
            ...vm,
            createdAt: new Date()
        });
    });
    
    renderVMs();
}

function simulateUsers() {
    const pages = ['index. html', 'produits.html', 'contact.html', 'admin.html'];
    const browsers = ['Chrome 120', 'Firefox 121', 'Safari 17', 'Edge 120'];
    
    // Générer entre 3 et 8 utilisateurs
    const userCount = Math.floor(Math. random() * 6) + 3;
    
    for (let i = 0; i < userCount; i++) {
        connectedUsers.push({
            sessionId: generateSessionId(),
            page: pages[Math.floor(Math.random() * pages.length)],
            duration: Math.floor(Math.random() * 600) + 60, // 1-10 minutes
            browser: browsers[Math.floor(Math.random() * browsers.length)],
            status: Math.random() > 0.3 ? 'active' : 'idle'
        });
    }
    
    renderUsers();
}

function generateId() {
    return 'vm_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

function generateSessionId() {
    return 'sess_' + Math.random().toString(36).substr(2, 12).toUpperCase();
}

function updateTime() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('fr-FR');
    document.getElementById('last-update').textContent = timeStr;
}

// Gestion du modal
function openAddVmModal() {
    document.getElementById('vm-modal').style.display = 'block';
    addLog('warning', 'Ouverture du formulaire d\'ajout de VM');
}

function closeAddVmModal() {
    document.getElementById('vm-modal').style.display = 'none';
    document.getElementById('vm-form').reset();
}

// Fermer le modal en cliquant à l'extérieur
window. onclick = function(event) {
    const modal = document.getElementById('vm-modal');
    if (event.target == modal) {
        closeAddVmModal();
    }
}

// Ajouter une VM
function addVM(event) {
    event.preventDefault();
    
    const vm = {
        id: generateId(),
        name: document.getElementById('vm-name').value,
        os: document.getElementById('vm-os').value,
        cpu: parseInt(document.getElementById('vm-cpu').value),
        ram: parseInt(document.getElementById('vm-ram').value),
        disk: parseInt(document.getElementById('vm-disk').value),
        ip: document.getElementById('vm-ip').value || 'Non assignée',
        description: document.getElementById('vm-description').value || 'Aucune description',
        status:  'running',
        createdAt: new Date()
    };
    
    vms.push(vm);
    renderVMs();
    closeAddVmModal();
    
    addLog('success', `VM "${vm.name}" créée avec succès`);
    refreshDashboard();
}

// Supprimer une VM
function deleteVM(vmId) {
    const vm = vms.find(v => v.id === vmId);
    if (confirm(`Êtes-vous sûr de vouloir supprimer la VM "${vm.name}" ?`)) {
        vms = vms.filter(v => v.id !== vmId);
        renderVMs();
        addLog('error', `VM "${vm.name}" supprimée`);
        refreshDashboard();
    }
}

// Toggle VM status
function toggleVMStatus(vmId) {
    const vm = vms.find(v => v.id === vmId);
    if (vm) {
        vm.status = vm.status === 'running' ? 'stopped' : 'running';
        renderVMs();
        addLog('warning', `VM "${vm.name}" ${vm.status === 'running' ? 'démarrée' : 'arrêtée'}`);
    }
}

// Afficher les VMs
function renderVMs() {
    const vmList = document.getElementById('vm-list');
    
    if (vms.length === 0) {
        vmList.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🖥️</div>
                <p>Aucune machine virtuelle configurée</p>
                <p style="font-size: 0.9rem; color: #aaa;">Cliquez sur "Ajouter une VM" pour commencer</p>
            </div>
        `;
        return;
    }
    
    vmList.innerHTML = vms. map(vm => `
        <div class="vm-card">
            <div class="vm-status-indicator ${vm.status === 'stopped' ? 'stopped' : ''}"></div>
            <div class="vm-info">
                <h4>${vm.name}</h4>
                <div class="vm-details">
                    <span class="vm-detail-item">💿 ${vm.os}</span>
                    <span class="vm-detail-item">🔧 ${vm.cpu} CPU</span>
                    <span class="vm-detail-item">💾 ${vm.ram} GB RAM</span>
                    <span class="vm-detail-item">💽 ${vm.disk} GB</span>
                    <span class="vm-detail-item">🌐 ${vm.ip}</span>
                </div>
                <p style="margin-top: 0.5rem; font-size: 0.85rem; color: #888;">${vm.description}</p>
            </div>
            <div class="vm-actions">
                <button class="btn-icon" onclick="toggleVMStatus('${vm.id}')" title="${vm.status === 'running' ? 'Arrêter' : 'Démarrer'}">
                    ${vm.status === 'running' ? '⏸️' : '▶️'}
                </button>
                <button class="btn-icon btn-delete" onclick="deleteVM('${vm.id}')" title="Supprimer">🗑️</button>
            </div>
        </div>
    `).join('');
}

// Afficher les utilisateurs
function renderUsers() {
    const tbody = document.getElementById('users-tbody');
    
    if (connectedUsers.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; padding: 2rem; color: #888;">
                    Aucun utilisateur connecté actuellement
                </td>
            </tr>
        `;
        return;
    }
    
    tbody.innerHTML = connectedUsers.map(user => `
        <tr>
            <td><code>${user.sessionId}</code></td>
            <td>📄 ${user.page}</td>
            <td>${formatDuration(user.duration)}</td>
            <td>${user. browser}</td>
            <td><span class="status-badge ${user.status}">${user.status === 'active' ? 'Actif' : 'Inactif'}</span></td>
        </tr>
    `).join('');
}

function formatDuration(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
}

// Rafraîchir les utilisateurs (simulation)
function refreshUsers() {
    // Modifier aléatoirement certains utilisateurs
    connectedUsers. forEach(user => {
        user.duration += Math.floor(Math.random() * 30) + 10;
        if (Math.random() > 0.7) {
            user.status = user.status === 'active' ?  'idle' : 'active';
        }
    });
    
    // Ajouter ou retirer un utilisateur aléatoirement
    if (Math.random() > 0.5 && connectedUsers.length < 15) {
        const pages = ['index.html', 'produits.html', 'contact.html'];
        const browsers = ['Chrome 120', 'Firefox 121', 'Safari 17'];
        connectedUsers.push({
            sessionId: generateSessionId(),
            page: pages[Math.floor(Math.random() * pages.length)],
            duration: Math. floor(Math.random() * 60) + 10,
            browser: browsers[Math. floor(Math.random() * browsers.length)],
            status: 'active'
        });
        addLog('success', 'Nouvel utilisateur connecté');
    } else if (Math.random() > 0.7 && connectedUsers.length > 1) {
        connectedUsers.pop();
        addLog('warning', 'Un utilisateur s\'est déconnecté');
    }
    
    renderUsers();
    refreshDashboard();
}

// Ajouter un log
function addLog(type, message) {
    const log = {
        time: new Date(),
        type: type,
        message: message
    };
    
    activityLogs.unshift(log);
    
    // Garder seulement les 50 derniers logs
    if (activityLogs.length > 50) {
        activityLogs = activityLogs.slice(0, 50);
    }
    
    renderLogs();
}

function renderLogs() {
    const logContainer = document.getElementById('activity-log');
    
    if (activityLogs. length === 0) {
        logContainer.innerHTML = `
            <div class="empty-state">
                <p style="color: #888;">Aucune activité récente</p>
            </div>
        `;
        return;
    }
    
    logContainer.innerHTML = activityLogs.map(log => `
        <div class="log-entry ${log.type}">
            <span class="log-time">${log.time. toLocaleTimeString('fr-FR')}</span>
            <span class="log-message">${log.message}</span>
        </div>
    `).join('');
}

function clearLogs() {
    if (confirm('Êtes-vous sûr de vouloir effacer tous les logs ?')) {
        activityLogs = [];
        renderLogs();
        addLog('warning', 'Logs effacés');
    }
}

// Rafraîchir le dashboard
function refreshDashboard() {
    document.getElementById('connected-users').textContent = connectedUsers.length;
    document. getElementById('vm-count').textContent = vms.filter(v => v.status === 'running').length;
}

// Auto-refresh toutes les 5 secondes
function startAutoRefresh() {
    setInterval(() => {
        // Simuler des changements d'utilisateurs
        connectedUsers.forEach(user => {
            user. duration += 5;
        });
        
        renderUsers();
        refreshDashboard();
    }, 5000);
}