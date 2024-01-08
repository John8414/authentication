const Schema = mongoose.Schema;

const User = new Schema({
  userName: String,
  password: String,
  accessToken: String,
});

export default mongoose.model('User', User);