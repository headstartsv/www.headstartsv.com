const config = require('../../config/config'),
  dynamoose = require('dynamoose');

module.exports = dynamoose.model('User', new dynamoose.Schema({
    ownerId: {
      type: Number,
      validate: function(v) { return v > 0; },
      hashKey: true
    },
    name: {
      type: String,
      rangeKey: true,
      index: true // name: nameLocalIndex, ProjectionType: ALL
    },
    breed: {
      type: String,
      trim: true,
      required: true,
      index: {
        global: true,
        rangeKey: 'ownerId',
        name: 'BreedIndex',
        project: true, // ProjectionType: ALL
        throughput: 5 // read and write are both 5
      }
    },
    color: {
      lowercase: true,
      type: [String],
      default: ['Brown']
    },
    age: Number
  },
  {
    throughput: {read: 5, write: 5, timestamps: true}
  }));
