export default {
  id: 'payloadModal',
  size: 'modal-md',
  title: null,
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
    label: 'Payload Value',
    variable: 'payload_value',
    placeholder: 'Payload value',
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
