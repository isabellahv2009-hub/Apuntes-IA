// ==================== INTERACCIÓN DE UNIDADES ====================
document.querySelectorAll('.unit-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const unitNum = btn.dataset.unit;
        
        // Remover clase active de todos los botones y secciones
        document.querySelectorAll('.unit-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.unit-content').forEach(section => section.classList.remove('active'));
        
        // Añadir clase active al botón y sección clickeado
        btn.classList.add('active');
        document.getElementById(`unit-${unitNum}`).classList.add('active');
    });
});

// ==================== EXPANDIR/CONTRAER TEMAS ====================
document.querySelectorAll('.tema-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const btn = header.querySelector('.toggle-btn');
        
        // Toggle display
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            content.classList.add('active');
            btn.textContent = 'Contraer';
        } else {
            content.style.display = 'none';
            content.classList.remove('active');
            btn.textContent = 'Expandir';
        }
    });
});

// ==================== VERIFICACIÓN DE RESPUESTAS ====================

// Unidad 2 - Pregunta 1: ¿Qué es la IA?
function checkAnswer1() {
    const selected = document.querySelector('input[name="ex1"]:checked');
    const feedback = document.getElementById('feedback1');
    
    if (!selected) {
        feedback.textContent = '⚠️ Por favor selecciona una respuesta';
        feedback.className = 'answer-feedback show incorrect';
        return;
    }
    
    if (selected.value === 'b' || selected.nextElementSibling.textContent.includes('Reconocer tu cara')) {
        feedback.innerHTML = '✅ ¡Correcto! Reconocer tu cara en una foto requiere IA (reconocimiento facial).';
        feedback.className = 'answer-feedback show correct';
    } else {
        feedback.innerHTML = '❌ Incorrecto. La respuesta correcta es b) Reconocer tu cara en una foto, ya que esto requiere una tecnología de IA como el reconocimiento facial.';
        feedback.className = 'answer-feedback show incorrect';
    }
}

// Unidad 2 - Pregunta 2: Evolución de la IA
function checkAnswer2() {
    const selected = document.querySelector('input[name="ex2"]:checked');
    const feedback = document.getElementById('feedback2');
    
    if (!selected) {
        feedback.textContent = '⚠️ Por favor selecciona una respuesta';
        feedback.className = 'answer-feedback show incorrect';
        return;
    }
    
    if (selected.value === 'b' || selected.nextElementSibling.textContent.includes('1950s')) {
        feedback.innerHTML = '✅ ¡Correcto! La IA comenzó formalmente en los años 1950s. Este es considerado el nacimiento de la Inteligencia Artificial como disciplina académica.';
        feedback.className = 'answer-feedback show correct';
    } else {
        feedback.innerHTML = '❌ Incorrecto. La respuesta correcta es b) 1950s. Este fue el período cuando se acuñó el término "Inteligencia Artificial" en la conferencia de Dartmouth.';
        feedback.className = 'answer-feedback show incorrect';
    }
}

// Unidad 2 - Pregunta 3: Tipos de IA
function checkAnswer3() {
    const selected = document.querySelector('input[name="ex3"]:checked');
    const feedback = document.getElementById('feedback3');
    
    if (!selected) {
        feedback.textContent = '⚠️ Por favor selecciona una respuesta';
        feedback.className = 'answer-feedback show incorrect';
        return;
    }
    
    if (selected.value === 'b' || selected.nextElementSibling.textContent.includes('IA Débil')) {
        feedback.innerHTML = '✅ ¡Correcto! Siri es un ejemplo de IA Débil (Narrow AI) porque está diseñada para realizar tareas específicas como responder preguntas y ejecutar comandos de voz.';
        feedback.className = 'answer-feedback show correct';
    } else {
        feedback.innerHTML = '❌ Incorrecto. La respuesta correcta es b) IA Débil. Siri no es una IA General ni Super, es una IA especializada para asistencia por voz.';
        feedback.className = 'answer-feedback show incorrect';
    }
}

// Unidad 3 - Orden de Algoritmo
function checkAlgoOrder() {
    const items = document.querySelectorAll('.sort-item');
    const feedback = document.getElementById('feedback-algo');
    const correctOrder = [
        'Tomar el cepillo',
        'Llenar el vaso con agua',
        'Poner pasta en el cepillo',
        'Cepillarse los dientes',
        'Enjuagarse la boca'
    ];
    
    let allCorrect = true;
    items.forEach((item, index) => {
        if (!item.textContent.includes(correctOrder[index])) {
            allCorrect = false;
        }
    });
    
    if (allCorrect) {
        feedback.innerHTML = '✅ ¡Excelente! Ordenaste correctamente todos los pasos del algoritmo.';
        feedback.className = 'answer-feedback show correct';
    } else {
        feedback.innerHTML = '❌ El orden no es completamente correcto. Intenta de nuevo. El orden debe ser:<br>1. Tomar el cepillo → 2. Llenar el vaso → 3. Poner pasta → 4. Cepillarse → 5. Enjuagarse';
        feedback.className = 'answer-feedback show incorrect';
    }
}

// Unidad 3 - Lógica y Condicionales
function checkLogic() {
    const selected = document.querySelector('input[name="ex-logic"]:checked');
    const feedback = document.getElementById('feedback-logic');
    
    if (!selected) {
        feedback.textContent = '⚠️ Por favor selecciona una respuesta';
        feedback.className = 'answer-feedback show incorrect';
        return;
    }
    
    if (selected.value === 'a' || selected.nextElementSibling.textContent.includes('Es mayor')) {
        feedback.innerHTML = '✅ ¡Correcto! Si el número es 10, y 10 > 5 es verdadero, entonces la salida es "Es mayor".';
        feedback.className = 'answer-feedback show correct';
    } else {
        feedback.innerHTML = '❌ Incorrecto. La respuesta correcta es a) Es mayor. Como 10 es mayor que 5, se cumple la condición y ejecuta "Es mayor".';
        feedback.className = 'answer-feedback show incorrect';
    }
}

// Unidad 4 - Machine Learning (Clasificación de frutas)
function checkML() {
    const selects = document.querySelectorAll('.ml-exercise select');
    const feedback = document.getElementById('feedback-ml');
    const correctAnswers = ['Manzana', 'Plátano', 'Naranja'];
    
    let correct = 0;
    selects.forEach((select, index) => {
        if (select.value === correctAnswers[index]) {
            correct++;
        }
    });
    
    if (correct === 3) {
        feedback.innerHTML = '✅ ¡Perfecto! Clasificaste todas las frutas correctamente. Has aprendido los patrones visibles como color, forma y tamaño.';
        feedback.className = 'answer-feedback show correct';
    } else if (correct > 0) {
        feedback.innerHTML = `⚠️ Has clasificado ${correct} de 3 correctamente. Recuerda: Rojo y redondo = Manzana, Amarillo y alargado = Plátano, Naranja y redondo = Naranja.`;
        feedback.className = 'answer-feedback show incorrect';
    } else {
        feedback.innerHTML = '❌ Intenta clasificar nuevamente. Observa las características: color, forma y tamaño.';
        feedback.className = 'answer-feedback show incorrect';
    }
}

function updateML() {
    // Esta función puede usarse para actualizar en tiempo real si es necesario
}

// Unidad 5 - Redes Neuronales
function checkNeuron() {
    const selected = document.querySelector('input[name="ex-neuron"]:checked');
    const feedback = document.getElementById('feedback-neuron');
    
    if (!selected) {
        feedback.textContent = '⚠️ Por favor selecciona una respuesta';
        feedback.className = 'answer-feedback show incorrect';
        return;
    }
    
    if (selected.value === 'b' || selected.nextElementSibling.textContent.includes('Generar imágenes')) {
        feedback.innerHTML = '✅ ¡Correcto! Generar imágenes a partir de texto (DALL-E, Midjourney) usa redes neuronales profundas. Las otras son tareas simples que no requieren IA.';
        feedback.className = 'answer-feedback show correct';
    } else {
        feedback.innerHTML = '❌ Incorrecto. La respuesta correcta es b) Generar imágenes a partir de texto. Esto es una tarea compleja que requiere redes neuronales. Calcular la suma es trivial y mostrar la hora es una función simple.';
        feedback.className = 'answer-feedback show incorrect';
    }
}

// Unidad 6 - Reflexión
function saveReflection() {
    const reflection = document.getElementById('reflection').value;
    const feedback = document.getElementById('feedback-reflection');
    
    if (reflection.trim() === '') {
        feedback.textContent = '⚠️ Por favor escribe tu reflexión';
        feedback.className = 'answer-feedback show incorrect';
        return;
    }
    
    feedback.innerHTML = `✅ ¡Excelente reflexión! Has guardado: "${reflection.substring(0, 50)}..."<br><strong>Reflexión:</strong> Probablemente interactúes con IA mucho más de lo que piensas. Desde redes sociales hasta videojuegos, la IA está en todas partes.`;
    feedback.className = 'answer-feedback show correct';
}

// ==================== DRAG AND DROP PARA ORDENAR ====================
let draggedElement = null;

document.querySelectorAll('.sort-item').forEach(item => {
    item.addEventListener('dragstart', () => {
        draggedElement = item;
        item.classList.add('dragging');
    });
    
    item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
    });
    
    item.addEventListener('dragover', (e) => {
        e.preventDefault();
        if (draggedElement && draggedElement !== item) {
            const allItems = document.querySelectorAll('.sort-item');
            const draggedIndex = Array.from(allItems).indexOf(draggedElement);
            const targetIndex = Array.from(allItems).indexOf(item);
            
            if (draggedIndex < targetIndex) {
                item.parentNode.insertBefore(draggedElement, item.nextSibling);
            } else {
                item.parentNode.insertBefore(draggedElement, item);
            }
        }
    });
});

// ==================== ANIMACIONES AL CARGAR ====================
window.addEventListener('load', () => {
    document.querySelectorAll('.tema-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// ==================== TECLADO DE ACCESIBILIDAD ====================
document.addEventListener('keydown', (e) => {
    // Tecla ESC para cerrar temas
    if (e.key === 'Escape') {
        document.querySelectorAll('.tema-content').forEach(content => {
            content.style.display = 'none';
            content.classList.remove('active');
        });
    }
    
    // Alt + número para cambiar de unidad
    if (e.altKey && e.key >= '2' && e.key <= '6') {
        const unitNum = e.key;
        const btn = document.querySelector(`[data-unit="${unitNum}"]`);
        if (btn) btn.click();
    }
});

console.log('✅ Academia IA - Aplicación Educativa Interactiva Cargada Exitosamente');
