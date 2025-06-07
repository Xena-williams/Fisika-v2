// script.js
document.addEventListener('DOMContentLoaded', function () {

    // --- Kalkulator Hukum Ohm (Tidak Berubah) ---
    const ohmForm = document.getElementById('ohm-form');
    const ohmCalculateSelect = document.getElementById('ohm-calculate');
    const ohmInputs = {
        tegangan: document.getElementById('ohm-input-tegangan'),
        arus: document.getElementById('ohm-input-arus'),
        hambatan: document.getElementById('ohm-input-hambatan'),
    };
    const ohmResultEl = document.getElementById('ohm-result');

    function updateOhmInputs() {
        const calculateValue = ohmCalculateSelect.value;
        Object.values(ohmInputs).forEach(input => input.style.display = 'none');
        if (calculateValue === 'tegangan') {
            ohmInputs.arus.style.display = 'block';
            ohmInputs.hambatan.style.display = 'block';
        } else if (calculateValue === 'arus') {
            ohmInputs.tegangan.style.display = 'block';
            ohmInputs.hambatan.style.display = 'block';
        } else if (calculateValue === 'hambatan') {
            ohmInputs.tegangan.style.display = 'block';
            ohmInputs.arus.style.display = 'block';
        }
    }
    
    // --- Kalkulator Hukum II Newton (Tidak Berubah) ---
    const newtonForm = document.getElementById('newton-form');
    const newtonCalculateSelect = document.getElementById('newton-calculate');
    const newtonInputs = {
        gaya: document.getElementById('newton-input-gaya'),
        massa: document.getElementById('newton-input-massa'),
        percepatan: document.getElementById('newton-input-percepatan'),
    };
    const newtonResultEl = document.getElementById('newton-result');

    function updateNewtonInputs() {
        const calculateValue = newtonCalculateSelect.value;
        Object.values(newtonInputs).forEach(input => input.style.display = 'none');
        if (calculateValue === 'gaya') {
            newtonInputs.massa.style.display = 'block';
            newtonInputs.percepatan.style.display = 'block';
        } else if (calculateValue === 'massa') {
            newtonInputs.gaya.style.display = 'block';
            newtonInputs.percepatan.style.display = 'block';
        } else if (calculateValue === 'percepatan') {
            newtonInputs.gaya.style.display = 'block';
            newtonInputs.massa.style.display = 'block';
        }
    }

    // --- Kalkulator Energi Kinetik (Tidak Berubah) ---
    const kineticForm = document.getElementById('kinetic-form');
    const kineticCalculateSelect = document.getElementById('kinetic-calculate');
    const kineticInputs = {
        energi: document.getElementById('kinetic-input-energi'),
        massa: document.getElementById('kinetic-input-massa'),
        kecepatan: document.getElementById('kinetic-input-kecepatan'),
    };
    const kineticResultEl = document.getElementById('kinetic-result');

    function updateKineticInputs() {
        const calculateValue = kineticCalculateSelect.value;
        Object.values(kineticInputs).forEach(input => input.style.display = 'none');
        if (calculateValue === 'energi') {
            kineticInputs.massa.style.display = 'block';
            kineticInputs.kecepatan.style.display = 'block';
        } else if (calculateValue === 'massa') {
            kineticInputs.energi.style.display = 'block';
            kineticInputs.kecepatan.style.display = 'block';
        } else if (calculateValue === 'kecepatan') {
            kineticInputs.energi.style.display = 'block';
            kineticInputs.massa.style.display = 'block';
        }
    }
    
    // --- Kalkulator Energi Potensial (Tidak Berubah) ---
    const GRAVITY = 9.8; 
    const potentialForm = document.getElementById('potential-form');
    const potentialCalculateSelect = document.getElementById('potential-calculate');
    const potentialInputs = {
        energi: document.getElementById('potential-input-energi'),
        massa: document.getElementById('potential-input-massa'),
        ketinggian: document.getElementById('potential-input-ketinggian'),
    };
    const potentialResultEl = document.getElementById('potential-result');

    function updatePotentialInputs() {
        const calculateValue = potentialCalculateSelect.value;
        Object.values(potentialInputs).forEach(input => input.style.display = 'none');
        if (calculateValue === 'energi') {
            potentialInputs.massa.style.display = 'block';
            potentialInputs.ketinggian.style.display = 'block';
        } else if (calculateValue === 'massa') {
            potentialInputs.energi.style.display = 'block';
            potentialInputs.ketinggian.style.display = 'block';
        } else if (calculateValue === 'ketinggian') {
            potentialInputs.energi.style.display = 'block';
            potentialInputs.massa.style.display = 'block';
        }
    }

    // ▼▼▼ KODE BARU DIMULAI DI SINI ▼▼▼
    // --- Kalkulator Daya ---
    const powerForm = document.getElementById('power-form');
    const powerCalculateSelect = document.getElementById('power-calculate');
    const powerInputs = {
        daya: document.getElementById('power-input-daya'),
        usaha: document.getElementById('power-input-usaha'),
        waktu: document.getElementById('power-input-waktu'),
    };
    const powerResultEl = document.getElementById('power-result');

    function updatePowerInputs() {
        const calculateValue = powerCalculateSelect.value;
        Object.values(powerInputs).forEach(input => input.style.display = 'none');
        if (calculateValue === 'daya') {
            powerInputs.usaha.style.display = 'block';
            powerInputs.waktu.style.display = 'block';
        } else if (calculateValue === 'usaha') {
            powerInputs.daya.style.display = 'block';
            powerInputs.waktu.style.display = 'block';
        } else if (calculateValue === 'waktu') {
            powerInputs.daya.style.display = 'block';
            powerInputs.usaha.style.display = 'block';
        }
    }
    // ▲▲▲ KODE BARU SELESAI DI SINI ▲▲▲

    // --- Event Listeners (Bagian Awal Tidak Berubah) ---
    if (ohmForm) {
        ohmCalculateSelect.addEventListener('change', updateOhmInputs);
        ohmForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const V = parseFloat(document.getElementById('ohm-tegangan').value);
            const I = parseFloat(document.getElementById('ohm-arus').value);
            const R = parseFloat(document.getElementById('ohm-hambatan').value);
            let result = '';
            
            try {
                switch (ohmCalculateSelect.value) {
                    case 'tegangan':
                        if (isNaN(I) || isNaN(R)) throw new Error("Input tidak valid.");
                        result = `Hasil: Tegangan (V) = ${I * R} Volt`;
                        break;
                    case 'arus':
                        if (isNaN(V) || isNaN(R)) throw new Error("Input tidak valid.");
                        if (R === 0) throw new Error("Hambatan tidak boleh nol.");
                        result = `Hasil: Arus (I) = ${(V / R).toFixed(4)} Ampere`;
                        break;
                    case 'hambatan':
                        if (isNaN(V) || isNaN(I)) throw new Error("Input tidak valid.");
                        if (I === 0) throw new Error("Arus tidak boleh nol.");
                        result = `Hasil: Hambatan (R) = ${(V / I).toFixed(4)} Ohm`;
                        break;
                }
                ohmResultEl.textContent = result;
                ohmResultEl.className = 'result';
            } catch (error) {
                ohmResultEl.textContent = `Error: ${error.message}`;
                ohmResultEl.className = 'result error';
            }
        });
        updateOhmInputs();
    }
    
    if (newtonForm) {
        newtonCalculateSelect.addEventListener('change', updateNewtonInputs);
        newtonForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const F = parseFloat(document.getElementById('newton-gaya').value);
            const m = parseFloat(document.getElementById('newton-massa').value);
            const a = parseFloat(document.getElementById('newton-percepatan').value);
            let result = '';

            try {
                switch (newtonCalculateSelect.value) {
                    case 'gaya':
                        if (isNaN(m) || isNaN(a)) throw new Error("Input tidak valid.");
                        result = `Hasil: Gaya (F) = ${m * a} Newton`;
                        break;
                    case 'massa':
                        if (isNaN(F) || isNaN(a)) throw new Error("Input tidak valid.");
                        if (a === 0) throw new Error("Percepatan tidak boleh nol.");
                        result = `Hasil: Massa (m) = ${(F / a).toFixed(4)} kg`;
                        break;
                    case 'percepatan':
                        if (isNaN(F) || isNaN(m)) throw new Error("Input tidak valid.");
                        if (m === 0) throw new Error("Massa tidak boleh nol.");
                        result = `Hasil: Percepatan (a) = ${(F / m).toFixed(4)} m/s²`;
                        break;
                }
                newtonResultEl.textContent = result;
                newtonResultEl.className = 'result';
            } catch (error) {
                newtonResultEl.textContent = `Error: ${error.message}`;
                newtonResultEl.className = 'result error';
            }
        });
        updateNewtonInputs();
    }

    if (kineticForm) {
        kineticCalculateSelect.addEventListener('change', updateKineticInputs);
        kineticForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const Ek = parseFloat(document.getElementById('kinetic-energi').value);
            const m = parseFloat(document.getElementById('kinetic-massa').value);
            const v = parseFloat(document.getElementById('kinetic-kecepatan').value);
            let result = '';

            try {
                switch (kineticCalculateSelect.value) {
                    case 'energi':
                        if (isNaN(m) || isNaN(v) || m < 0) throw new Error("Input massa dan kecepatan tidak valid.");
                        result = `Hasil: Energi Kinetik (Ek) = ${0.5 * m * v * v} Joule`;
                        break;
                    case 'massa':
                        if (isNaN(Ek) || isNaN(v) || Ek < 0) throw new Error("Input energi dan kecepatan tidak valid.");
                        if (v === 0) throw new Error("Kecepatan tidak boleh nol.");
                        result = `Hasil: Massa (m) = ${(2 * Ek) / (v * v)} kg`;
                        break;
                    case 'kecepatan':
                        if (isNaN(Ek) || isNaN(m) || Ek < 0 || m <= 0) throw new Error("Input energi dan massa tidak valid.");
                        result = `Hasil: Kecepatan (v) = ${Math.sqrt((2 * Ek) / m).toFixed(4)} m/s`;
                        break;
                }
                kineticResultEl.textContent = result;
                kineticResultEl.className = 'result';
            } catch (error) {
                kineticResultEl.textContent = `Error: ${error.message}`;
                kineticResultEl.className = 'result error';
            }
        });
        updateKineticInputs();
    }
    
    if (potentialForm) {
        potentialCalculateSelect.addEventListener('change', updatePotentialInputs);
        potentialForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const Ep = parseFloat(document.getElementById('potential-energi').value);
            const m = parseFloat(document.getElementById('potential-massa').value);
            const h = parseFloat(document.getElementById('potential-ketinggian').value);
            let result = '';

            try {
                switch (potentialCalculateSelect.value) {
                    case 'energi':
                        if (isNaN(m) || isNaN(h) || m < 0) throw new Error("Input massa dan ketinggian tidak valid.");
                        result = `Hasil: Energi Potensial (Ep) = ${(m * GRAVITY * h).toFixed(4)} Joule`;
                        break;
                    case 'massa':
                        if (isNaN(Ep) || isNaN(h) || Ep < 0) throw new Error("Input energi dan ketinggian tidak valid.");
                        if (h === 0) throw new Error("Ketinggian tidak boleh nol.");
                        result = `Hasil: Massa (m) = ${(Ep / (GRAVITY * h)).toFixed(4)} kg`;
                        break;
                    case 'ketinggian':
                        if (isNaN(Ep) || isNaN(m) || Ep < 0 || m <= 0) throw new Error("Input energi dan massa tidak valid.");
                        result = `Hasil: Ketinggian (h) = ${(Ep / (GRAVITY * m)).toFixed(4)} m`;
                        break;
                }
                potentialResultEl.textContent = result;
                potentialResultEl.className = 'result';
            } catch (error) {
                potentialResultEl.textContent = `Error: ${error.message}`;
                potentialResultEl.className = 'result error';
            }
        });
        updatePotentialInputs(); 
    }

    // ▼▼▼ KODE BARU DIMULAI DI SINI ▼▼▼
    if (powerForm) {
        powerCalculateSelect.addEventListener('change', updatePowerInputs);
        powerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const P = parseFloat(document.getElementById('power-daya').value);
            const W = parseFloat(document.getElementById('power-usaha').value);
            const t = parseFloat(document.getElementById('power-waktu').value);
            let result = '';

            try {
                switch (powerCalculateSelect.value) {
                    case 'daya':
                        if (isNaN(W) || isNaN(t)) throw new Error("Input tidak valid.");
                        if (t === 0) throw new Error("Waktu tidak boleh nol.");
                        result = `Hasil: Daya (P) = ${(W / t).toFixed(4)} Watt`;
                        break;
                    case 'usaha':
                        if (isNaN(P) || isNaN(t)) throw new Error("Input tidak valid.");
                        result = `Hasil: Usaha/Energi (W) = ${(P * t).toFixed(4)} Joule`;
                        break;
                    case 'waktu':
                        if (isNaN(P) || isNaN(W)) throw new Error("Input tidak valid.");
                        if (P === 0) throw new Error("Daya tidak boleh nol.");
                        result = `Hasil: Waktu (t) = ${(W / P).toFixed(4)} detik`;
                        break;
                }
                powerResultEl.textContent = result;
                powerResultEl.className = 'result';
            } catch (error) {
                powerResultEl.textContent = `Error: ${error.message}`;
                powerResultEl.className = 'result error';
            }
        });
        updatePowerInputs(); // Panggil saat pertama kali load
    }
    // ▲▲▲ KODE BARU SELESAI DI SINI ▲▲▲
});