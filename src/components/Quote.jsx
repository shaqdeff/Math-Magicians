const image = require('../images/math-brain.png');

function Quote() {
  return (
    <div className="quote-container">
      <div className="quote">
        <p>
          &quot;Mathematics as an expression of the human mind reflects the
          active will, the contemplative reason, and the desire for aesthetic
          perfection. Its basic elements are logic and intuition, analysis and
          construction, generality and individuality.&quot;
          <br />
          <br />
          <strong className="quote-author">
            — Richard Courant, German-American mathematician.
          </strong>
        </p>
      </div>
      <img className="math-brain" src={image} alt="" />
    </div>
  );
}

export default Quote;
