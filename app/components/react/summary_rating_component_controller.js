import { Controller } from "@hotwired/stimulus";

const starHTML = `<svg class="w-4 h-4 stroke-gray-400 text-white cursor-pointer mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>`
const starNode = document.createRange().createContextualFragment(starHTML)

export default class extends Controller {
  static values = {
    detailRateTime: { type: Array, default: [0, 0, 0, 0, 0] },
    baseRateRatio: { type: Number, default: 5 },
    rateRatio: { type: Number, default: 0 },
    totalRateTime: { type: Number, default: 0 },
    detailPercent: { type: Array, default: [0 ,0 ,0 ,0 ,0] }
  }
  connect() {
    console.log("Hello, Stimulus!", this.totalRateTimeValue);
    console.log("Hello, Stimulus!", this.detailRateTimeValue);
    console.log("Hello, Stimulus!", this.baseRateRatioValue);
    console.log("Hello, Stimulus!", this.detailPercentValue);
    console.log("Hello, Stimulus!", this.rateRatioValue);

  }
  initialize() {
    this.totalRateTimeValue = this.detailRateTimeValue.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    }, 0)
    const arrayPoint = [0, 0, 0, 0, 0]
    this.detailPercentValue.forEach((percent, index) => {
      this.detailPercentValue[index] = ((this.detailRateTimeValue[index]/this.totalRateTimeValue)*100).toFixed();
      arrayPoint[index] = (1 + index)*this.detailRateTimeValue[index]
    })
    const sumPoint = arrayPoint.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    }, 0)
    console.log(sumPoint)
    this.rateRatioValue = ((sumPoint/(this.totalRateTimeValue*5))*5).toFixed(1)
  }
}
