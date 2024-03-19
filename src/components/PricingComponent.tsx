import { ChangeEvent, useState } from 'react';
import styles from './PricingComponent.module.css';

export default function PricingComponent(): JSX.Element {
  const [sliderVal, setSliderVal] = useState<number>(50);
  const [billingVal, setBillingVal] = useState<number>(0);

  function handleMainSliderChange(e: ChangeEvent): void {
    setSliderVal(Number((e.target as HTMLInputElement).value));
  }
  function handleBillingChange(e: ChangeEvent): void {
    setBillingVal(Number((e.target as HTMLInputElement).value));
  }

  return (
    <div className={styles.pricingComponent}>
      <header className={styles.header}>
        <h1 className={styles.title}>Simple, traffic-based pricing</h1>
        <h3 className={styles.subtitle}>
          Sign-up for our 30-day trial. No credit card required.
        </h3>
      </header>

      <main className={styles.card}>
        <header className={styles.cardHeader}>
          <p className={styles.viewCount}>100K pageviews</p>
          <p className={styles.pricing}>
            <span>$16.00</span>/month
          </p>
        </header>
        <main className={styles.cardMain}>
          <div className={styles.sliderWrapper}>
            <input
              type='range'
              min={0}
              max={100}
              value={sliderVal}
              onChange={handleMainSliderChange}
              className={styles.slider}
            />
            <div
              className={styles.sliderBar}
              style={{ width: `${sliderVal}%` }}
            ></div>
          </div>

          <div className={styles.billing}>
            <p className={styles.billingText}>Monthly Billing</p>
            <input
              type='range'
              min={0}
              max={1}
              value={billingVal}
              onChange={handleBillingChange}
              className={styles.sliderBilling}
            />
            <p className={styles.billingText}>
              Yearly Billing <span>25% discount</span>
            </p>
          </div>
        </main>
        <footer className={styles.cardFooter}>
          <ul className={styles.listFeatures}>
            <li className={styles.listItem}>Unlimited websites</li>
            <li className={styles.listItem}>100% data ownership</li>
            <li className={styles.listItem}>Email reports</li>
          </ul>

          <button className={styles.btnStartTrial}>Start my trial</button>
        </footer>
      </main>
    </div>
  );
}
