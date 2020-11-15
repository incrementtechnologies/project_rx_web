export default {
  id: 'paymentCentersModal',
  size: 'modal-md',
  title: 'Add Payment Center',
  background: null,
  inputs: [{
    row: 'full',
    label: 'Payload',
    variable: 'payload',
    placeholder: 'Payload',
    value: 'null',
    disabled: true,
    required: true,
    id: 'payload',
    type: 'input',
    validation: {
      size: 1,
      type: 'text'
    }
  }, {
    row: 'full',
    label: 'Payment Center',
    variable: 'category',
    placeholder: 'Payment Center',
    value: 'null',
    required: true,
    id: 'category',
    type: 'input',
    validation: {
      size: 1,
      type: 'text'
    }
  }, {
    row: 'full',
    label: 'Account Number/Name',
    variable: 'payload_value',
    placeholder: 'Account Number/Name',
    value: 'null',
    required: true,
    id: 'payload_value',
    type: 'input',
    validation: {
      size: 1,
      type: 'text'
    }
  }],
  route: 'payloads/create',
  button: {
    left: 'Cancel',
    right: 'Submit'
  },
  sort: null,
  params: [{
    variable: 'account_id',
    value: null
  }]
}
