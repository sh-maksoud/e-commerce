

import './Features.css';

import trophy from '../../assets/trophy.png';
import guarantee from '../../assets/guarantee.png';
import shipping from '../../assets/shipping.png';
import customerSupport from '../../assets/customer-support.png';

const featureData = [
  { id: 1, image: trophy, title: 'High Quality', description: 'Crafted from top materials' },
  { id: 2, image: guarantee, title: 'Warranty Protection', description: 'Over 2 years' },
  { id: 3, image: shipping, title: 'Free Shipping', description: 'Order over $150' },
  { id: 4, image: customerSupport, title: '24/7 Support', description: 'Dedicated support' },
];

const Features = ({ features = featureData }) => {
  return (
    <section className="features-section">
      <div className="features-container">
        {features.map((feature) => (
          <div key={feature.id} className="feature-item">
            <img src={feature.image} alt={feature.title} className="feature-image" />
            <div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
