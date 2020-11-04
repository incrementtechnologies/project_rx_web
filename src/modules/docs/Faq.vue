<template>
  <div
    class="modal fade"
    id="faqModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content">
        <div class="modal-header bg-primary">
          <h5 class="modal-title text-light" id="exampleModalLabel">FREQUENTLY ASKED QUESTIONS</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" class="text-white">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <span class="search">
            <h5 class="search-header">
              <strong>How can we help you?</strong>
            </h5>
            <input
              type="text"
              class="form-control form-control-custom"
              v-model="searchQuery"
              placeholder="Search"
            >
          </span>
          <div class="faq-holder">
            <ul class="ul" v-if="faqs.length === 0">
              <li>
                <strong>No FAQs as of the moment.</strong>
              </li>
            </ul>
          </div>
          <div class="faq-holder" v-for="(item, index) in resultFaq" :key="index" v-if="faqs.length > 0">
            <ul class="ul">
              <li>
                <strong>{{item.question}}</strong>
              </li>
              <li>{{item.answer}}</li>
            </ul>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-danger"
            data-toggle="modal"
            data-target="#faqModal"
          >Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~assets/style/colors.scss";

.bg-primary {
  background-color: $primary !important;
}

.faq-holder {
  width: 90%;
  float: left;
  margin-left: 5%;
  margin-right: 5%;
}

.ul {
  padding: 0px;
  list-style: none;
}

ul li {
  text-align: justify;
  font-size: 15px;
  color: grey;
  padding-top: 10px;
}

.search {
  margin-top: 1%;
  margin-bottom: 2%;
  width: 90%;
  float: left;
  margin-left: 5%;
  margin-right: 5%;
}

.search-header {
  color: grey;
  text-align: center;
  margin-bottom: 2%;
}

.modal-body {
  min-height: 450px;
}

</style>

<script>
export default {
  mounted() {
    this.retrieve()
  },
  data() {
    return {
      faqs: [],
      searchQuery: null
    }
  },
  computed: {
    resultFaq() {
      if (this.searchQuery) {
        return this.faqs.filter(item => {
          return this.searchQuery
            .toLowerCase()
            .split(' ')
            .every(v => item.question.toLowerCase().includes(v))
        })
      } else {
        return this.faqs
      }
    }
  },
  methods: {
    retrieve() {
      let parameter = {
        condition: [{
          value: 'faqs',
          column: 'payload',
          clause: '='
        }]
      }
      this.APIRequest('payloads/retrieve', parameter).then(response => {
        if(response.data.length > 0){
          for(let i in response.data){
            let data = JSON.parse(response.data[i].payload_value)
            this.faqs.push(data)
          }
        }
      })
    }
  }
}
</script>
