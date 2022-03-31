<template>
  <div class="main-block">
    <form class="form">
      <h1 class="title-form">Форма создания Клиента</h1>
      <div class="form-attrebutes">
        <h1>Атрибуты формы</h1>
        <div class="input">
          <label for="input-last-name" required>Фамилия</label>
          <input v-model="state.lastName" id="input-last-name" name="Фамилия">
        </div>
        <span v-if="v$.lastName.$error">{{ v$.lastName.$errors[0].$message }}</span>
        <div class="input">
          <label for="input-first-name" required>Имя</label>
          <input v-model="state.firstName" id="input-first-name" name="Имя">
        </div>
        <span v-if="v$.firstName.$error">{{ v$.firstName.$errors[0].$message }}</span>
        <div class="input">
          <label for="input-middle-name">Отчество</label>
          <input v-model="state.middleName" id="input-middle-name" name="Отчество">
        </div>
        <div class="input">
          <label for="input-birth-date" required>Дата рождения</label>
          <input v-model="state.birthDate" id="input-birth-date" name="Дата рождения" placeholder="ДД.ММ.ГГГГ">
        </div>
        <span v-if="v$.birthDate.$error">{{ v$.birthDate.$errors[0].$message }}</span>
        <div class="input">
          <label for="input-phone-number" required>Номер телефона</label>
          <input v-model="state.phoneNumber" id="input-phone-number" name="Номер телефона">
        </div>
        <span v-if="v$.phoneNumber.$error">{{ v$.phoneNumber.$errors[0].$message }}</span>
        <div class="input">
          <label for="gender">Пол</label>
          <select v-model="state.gender" name="gender" id="gender">
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
          </select>
        </div>
        <div class="input">
          <label for="group-client" required>Группа клиента</label>
          <select v-model="state.groupClient" name="group-client" id="group-client">
            <option value="VIP">VIP</option>
            <option value="problematic">Проблемный</option>
            <option value="CHI">ОМС</option>
          </select>
        </div>
        <span v-if="v$.groupClient.$error">{{ v$.groupClient.$errors[0].$message }}</span>
        <div class="input">
          <label for="doctor">Лечащий врач</label>
          <select v-model="state.doctor" name="doctor" id="doctor">
            <option value="Ivanov">Иванов</option>
            <option value="Zaharov">Захаров</option>
            <option value="Chernosheva">Чернышева</option>
          </select>
        </div>
        <div class="input-checkbox">
          <label for="checkbox">Не отправлять СМС</label>
          <input v-model="state.checkbox" type="checkbox">
        </div>
      </div>
      <div class="address">
        <h1>Адрес</h1>
        <div class="input">
          <label for="input-address-index">Индекс</label>
          <input v-model="state.addressIndex" id="input-address-index" name="Индекс">
        </div>
        <div class="input">
          <label for="input-address-country">Страна</label>
          <input v-model="state.addressCountry" id="input-address-country" name="Страна">
        </div>
        <div class="input">
          <label for="input-address-oblast">Область</label>
          <input v-model="state.addressOblast" id="input-address-oblast" name="Область">
        </div>
        <div class="input">
          <label for="input-address-city" required>Город</label>
          <input v-model="state.addressCity" id="input-address-city" name="Город">
        </div>
        <span v-if="v$.addressCity.$error">{{ v$.addressCity.$errors[0].$message }}</span>
        <div class="input">
          <label for="input-address-ctreet">Улица</label>
          <input v-model="state.addressStreet" id="input-address-ctreet" name="Улица">
        </div>
        <div class="input">
          <label for="input-address-building">Дом</label>
          <input v-model="state.addressBuilding" id="input-address-building" name="Дом">
        </div>
      </div>
      <div class="passport">
        <h1>Паспорт</h1>
        <div class="input">
          <label for="document-type" required>Тип документа</label>
          <select v-model="state.documentType" name="document-type" id="document-type">
            <option value="passport">Паспорт</option>
            <option value="birth-certificate">Свидетельство о рождении</option>
            <option value="driver-license">Водительское удостоверение</option>
          </select>
        </div>
        <span v-if="v$.documentType.$error">{{ v$.documentType.$errors[0].$message }}</span>
        <div class="input">
          <label for="input-passport-batch">Серия</label>
          <input v-model="state.passportBatch" id="input-passport-batch" name="Серия">
        </div>
        <div class="input">
          <label for="input-passport-number">Номер</label>
          <input v-model="state.passportNumber" id="input-passport-number" name="Номер">
        </div>
        <div class="input">
          <label for="input-passport-issuer">Кем выдан</label>
          <textarea v-model="state.passportIssuer" id="input-passport-issuer" name="Кем выдан" rows="2" cols="50"></textarea>
        </div>
        <div class="input">
          <label for="input-passport-date" required>Дата выдачи</label>
          <input v-model="state.passportDate" id="input-passport-date" name="Дата выдачи" placeholder="ДД.ММ.ГГГГ">
        </div>
        <span v-if="v$.passportDate.$error">{{ v$.passportDate.$errors[0].$message }}</span>
      </div>
      <button class="submit-form" @click.prevent="submitForm" type="submit">Отправить</button>
    </form>
  </div>
</template>

<script>
import useValidate from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import { reactive, computed } from 'vue'

  export default {
    setup() {
      const state = reactive({
        lastName: '',
        firstName: '',
        middleName: '',
        birthDate: '',
        phoneNumber: '',
        gender: 'male',
        groupClient: '',
        doctor: '',
        checkbox: false,

        addressIndex: '',
        addressCountry: '',
        addressOblast: '',
        addressCity: '',
        addressStreet: '',
        addressBuilding: '',

        documentType: 'passport',
        passportBatch: '',
        passportNumber: '',
        passportIssuer: '',
        passportDate: '',
      })

      const rules = computed(() => {
        return {
          lastName: { required, minLength: minLength(2) },
          firstName: { required, minLength: minLength(2) },
          birthDate: { required },
          phoneNumber: { required },
          groupClient: { required },

          addressCity: { required, minLength: minLength(2) },

          documentType: { required },
          passportDate: { required },
        }
      })
      const v$ = useValidate(rules, state)

      return {
        state,
        v$,
      }
    },
    methods: {
      submitForm() {
        this.v$.$validate()
        if(!this.v$.$error) {
          alert('Новый клиент успешно создан.')
        } else {
          alert('Форма была заполнена неверно.')
        }
      }
    },
  }
</script>

<style scoped lang="scss">
$main-font-size: 10pt;
$label-padding: 0 0.7em;
%lebel {
  flex-basis: 0;
    flex-grow: 3;
    text-align: right;
    padding: $label-padding;
    align-self: center;
}
%input {
  flex-basis: 0;
  flex-grow: 13;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 0.25em 0.5em;
  font-size: $main-font-size;
}

  .main-block {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    overflow: auto;
  }

  .form {
    width: 700px;
    margin: 3em auto;
    padding: 20px;
    border: 0.5px solid black;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;
    font-size: $main-font-size;

    display: flex;
    flex-direction: column;
  }

  .title-form {
    align-self: center;
  }

  h1 {
    margin-bottom: 15px;
    font-size: 15pt;
  }

  .form-attrebutes, .address, .passport {
    display: flex;
    flex-direction: column;
  }

  .input {
    display: flex;
  }

  .input {
    label {
      @extend %lebel
    }
  }

  .input input, .input select, .input textarea {
    @extend %input;
    -webkit-appearance: none;
  }

  .input {
    label[required]::before {
      content: '* ';
      color: dodgerblue;
    }
  }

  span {
    font-size: 8pt;
    color: hsl(0, 75%, 50%);
    margin: 0.5em 0;
    align-self: center;
  }

  .input-checkbox {
    font-size: $main-font-size;
    margin: 0.25em 0;

    display: flex;

    label {
      @extend %lebel
    }

    input {
      @extend %input
    }
  }

  .submit-form {
    width: 100px;
    height: 20px;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 7px;
    align-self: center;
    margin-top: 10px;

    display: flex;
    justify-content: center;
  }
</style>
