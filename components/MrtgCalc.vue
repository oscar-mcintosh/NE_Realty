<template>
  <div class="widget-calculator">
    <h3 class="widget-title">Mortgage Calculator</h3>

    <form @submit.prevent="calculateMortgage">
      <ul>
        <li>
          <i>$</i>
          <input type="number" v-model="totalAmount" placeholder="Total Amount">
        </li>
        <li>
          <i>$</i>
          <input type="number" v-model="downPayment" placeholder="Down Payment">
        </li>
        <li>
          <i>%</i>
          <input type="number" v-model="interestRate" placeholder="Interest Rate">
        </li>
        <li>
          <i>$</i>
          <input type="number" v-model="monthlyRepayments" placeholder="Number of years">
        </li>
        <li>
          <button type="submit" class="btn2">Calculate</button>
        </li>
      </ul>
    </form>

    <div class="descp-text" v-if="mortgageResult !== null">
      <h3>Mortgage Calculation Results</h3>
      <p>Total Monthly Payment: ${{ mortgageResult }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const totalAmount = ref();
const downPayment = ref();
const interestRate = ref();
const monthlyRepayments = ref();
const mortgageResult = ref(null);

const calculateMortgage = () => {
  // Input validation
  if (
    totalAmount.value <= 0 ||
    downPayment.value < 0 ||
    interestRate.value <= 0 ||
    monthlyRepayments.value <= 0
  ) {
    mortgageResult.value = 'Please provide valid input values.';
    return;
  }

  // Perform mortgage calculation
  const loanAmount = totalAmount.value - downPayment.value;
  const monthlyInterestRate = (interestRate.value / 100) / 12;
  const numberOfPayments = monthlyRepayments.value * 12;

  if (monthlyInterestRate === 0) {
    mortgageResult.value = (loanAmount / numberOfPayments).toFixed(2);
  } else {
    const factor =
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) * monthlyInterestRate) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    mortgageResult.value = (loanAmount * factor).toFixed(2);
  }
};
</script>




<style scoped>

.widget-calculator{
    margin-top: 20px;
    padding: 30px 0;
}

.widget-calculator ul li {
    float: left;
    width: 100%;
    border: 1px solid #dfe0e5;
    line-height: 48px;
    height: 48px;
    margin-bottom: 16px;
    position: relative;
}

.widget-calculator ul li i {
    font-size: 16px;
    color: #67686c;
    width: 49px;
    text-align: center;
    border-right: 1px solid #dfe0e5;
    line-height: 46px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
}

.widget-calculator ul li input {
    float: left;
    color: #67686c;
    font-size: 12px;
    padding-left: 16px;
    height: 100%;
    margin: 0;
    width: 100%;
    border: 0;
    padding: 0 15px 0 68px;
    outline: none;
    background-color: #ffffff;
}

.btn2 {
    float: left;
    width: 100%;
    color: #ffffff;
    font-size: 14px;
    height: 51px;
    line-height: 51px;
    border-radius: 30px;
    text-align: center;
    border: 0;
    cursor: pointer;
    position: relative;
    z-index: 1;
    overflow: hidden;
    background-color: #6a7be7;

}

</style>