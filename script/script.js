{
    const onStartRefreshCurrencies = (dolarSaleElement, euroSaleElement, funtSaleElement, dolarBuyElement, euroBuyElement, funtBuyElement) => {
        dolarSaleElement.value = (Math.random() * 0.2 + 4).toFixed(3);
        euroSaleElement.value = ((Math.random() * 0.4) + 4.1).toFixed(3);
        funtSaleElement.value = ((Math.random() * 0.3) + 5.1).toFixed(3);
        dolarBuyElement.value = (dolarSaleElement.value - (dolarSaleElement.value * 1 / 200)).toFixed(3);
        euroBuyElement.value = (euroSaleElement.value - (euroSaleElement.value * 1 / 200)).toFixed(3);
        funtBuyElement.value = (funtSaleElement.value - (funtSaleElement.value * 1 / 200)).toFixed(3);
    };

    const refreshCurrenciesButton = (dolarSaleElement, euroSaleElement, funtSaleElement, dolarBuyElement, euroBuyElement, funtBuyElement) => {
        const button = document.querySelector(".js-form__refreshButton");
        button.addEventListener("click", () => {
            onStartRefreshCurrencies(dolarSaleElement, euroSaleElement, funtSaleElement, dolarBuyElement, euroBuyElement, funtBuyElement);
        });
    };

    const rateChangeBackground = (radioSaleElement, radioBuyElement, underListSale, underListBuy) => {
        underListSale.classList = (radioSaleElement.checked === true) ? "form__underList form__underList--darker" : "form__underList form__underList--brighter";
        underListBuy.classList = (radioBuyElement.checked === true) ? "form__underList form__underList--darker" : "form__underList form__underList--brighter";
    };

    const changeTextAmount = (selectElement, radioBuyElement) => {
        if (radioBuyElement.checked === false) {
            return "  (wartość w złotych) ";
        };

        switch (selectElement.value) {
            case "Dolar":
                return " (wartość w dolarach)  ";

            case "Euro":
                return " (wartość w euro)  ";

            case "Funt":
                return " (wartość w funtach)  ";

            default:
                return "  ";
        };
    };

    const resultValueAndResultText = (selectElement, radioSaleElement, radioBuyElement, amount, dolarSaleElement, euroSaleElement, funtSaleElement, dolarBuyElement, euroBuyElement, funtBuyElement, resultElement, resultSymbol) => {
        const dolarSale = amount.value / dolarSaleElement.value;
        const euroSale = amount.value / euroSaleElement.value;
        const funtSale = amount.value / funtSaleElement.value;
        const dolarBuy = amount.value * dolarBuyElement.value;
        const euroBuy = amount.value * euroBuyElement.value;
        const funtBuy = amount.value * funtBuyElement.value;

        if (radioSaleElement.checked === true) {
            switch (selectElement.value) {
                case "Dolar":
                    resultElement.innerText = (dolarSale.toFixed(2));
                    resultSymbol.innerText = " [ $ ]";
                    resultElement.classList = "form__result--colorBlack";
                    break;
                case "Euro":
                    resultElement.innerText = (euroSale.toFixed(2));
                    resultSymbol.innerText = " [ € ]";
                    resultElement.classList = "form__result--colorBlack";
                    break;
                case "Funt":
                    resultElement.innerText = (funtSale.toFixed(2));
                    resultSymbol.innerText = " [ £ ]";
                    resultElement.classList = "form__result--colorBlack";
                    break;
            }
        } else if (radioBuyElement.checked === true) {
            switch (selectElement.value) {
                case "Dolar":
                    resultElement.innerText = (dolarBuy.toFixed(2));
                    resultSymbol.innerText = " [ PLN ]";
                    resultElement.classList = "form__result--colorBlack";
                    break;
                case "Euro":
                    resultElement.innerText = (euroBuy.toFixed(2));
                    resultSymbol.innerText = " [ PLN ]";
                    resultElement.classList = "form__result--colorBlack";
                    break;
                case "Funt":
                    resultElement.innerText = (funtBuy.toFixed(2));
                    resultSymbol.innerText = " [ PLN ]";
                    resultElement.classList = "form__result--colorBlack";
                    break;
            }
        } else {
            resultElement.classList = "form__result--colorRed";
            resultElement.innerText = ("Wybierz Sprzedaż/Kupno");
        }
    };

    const removeData = (selectElement, radioSaleElement, radioBuyElement, underListSale, underListBuy, amount, textAmount, resultElement, resultSymbol) => {
        if (radioSaleElement.checked === true || radioBuyElement.checked === true) {
            underListSale.classList = "form__underList form__underList--brighter";
            underListBuy.classList = "form__underList form__underList--brighter";
        };

        if (radioSaleElement.checked === false || radioBuyElement.checked === false) {
            resultElement.innerText = "";
            textAmount.innerText = "";
            resultSymbol.innerText = "";
        };

        selectElement.value = "Dolar";
        radioBuyElement.checked = "";
        radioSaleElement.checked = "";
        amount.value = "";
    };

    const removeButtonClick = (selectElement, radioSaleElement, radioBuyElement, underListSale, underListBuy, amount, textAmount, resultElement, resultSymbol) => {
        const removeButton = document.querySelector(".js-form__removeButton");
        removeButton.addEventListener("click", () => {
            removeData(selectElement, radioSaleElement, radioBuyElement, underListSale, underListBuy, amount, textAmount, resultElement, resultSymbol);
        });
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        const underListSale = document.querySelector(".js-form__underListSale");
        const underListBuy = document.querySelector(".js-form__underListBuy");
        const radioSaleElement = document.querySelector(".js-form__radioSale");
        const radioBuyElement = document.querySelector(".js-form__radioBuy");
        const dolarSaleElement = document.querySelector(".js-form__fieldDolarSale");
        const euroSaleElement = document.querySelector(".js-form__fieldEuroSale");
        const funtSaleElement = document.querySelector(".js-form__fieldFuntSale");
        const dolarBuyElement = document.querySelector(".js-form__fieldDolarBuy");
        const euroBuyElement = document.querySelector(".js-form__fieldEuroBuy");
        const funtBuyElement = document.querySelector(".js-form__fieldFuntBuy");
        const selectElement = document.querySelector(".js-form__select");
        const amount = document.querySelector(".js-form__fieldAmount");
        const resultElement = document.querySelector(".js-form__result");
        const resultSymbol = document.querySelector(".js-form__resultSymbol");

        onStartRefreshCurrencies(dolarSaleElement, euroSaleElement, funtSaleElement, dolarBuyElement, euroBuyElement, funtBuyElement);

        refreshCurrenciesButton(dolarSaleElement, euroSaleElement, funtSaleElement, dolarBuyElement, euroBuyElement, funtBuyElement);

        formElement.addEventListener("input", () => {
            const textAmount = document.querySelector(".js-form__textAmount");

            rateChangeBackground(radioSaleElement, radioBuyElement, underListSale, underListBuy);

            const textInput = changeTextAmount(selectElement, radioBuyElement);
            textAmount.innerText = (textInput);


            removeButtonClick(selectElement, radioSaleElement, radioBuyElement, underListSale, underListBuy, amount, textAmount, resultElement, resultSymbol);

        });

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            resultValueAndResultText(selectElement, radioSaleElement, radioBuyElement, amount, dolarSaleElement, euroSaleElement, funtSaleElement, dolarBuyElement, euroBuyElement, funtBuyElement, resultElement, resultSymbol);
        });

    };

    init();
}