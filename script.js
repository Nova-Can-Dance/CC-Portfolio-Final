// Interactive sketches for each assignment
function setup() {
  if (document.getElementById('sketch-container1')) {
    let cnv1 = createCanvas(400, 200);
    cnv1.parent('sketch-container1');
    background(220);
    text('Lost and Found Project', 50, 100);
  }

  if (document.getElementById('sketch-container2')) {
    let cnv2 = createCanvas(400, 200);
    cnv2.parent('sketch-container2');
    background(180);
    ellipse(200, 100, 150, 150);
    text('Face Generator', 150, 180);
  }
}
