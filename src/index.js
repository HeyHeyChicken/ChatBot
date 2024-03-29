const LIBRARIES = {
  Skill: require("../../../Libraries/Skill")
};

class ChatBot extends LIBRARIES.Skill {
  constructor(_main, _settings, _folder) {
    super(_main, _settings, _folder);
    const SELF = this;

    for(let i = 0; i < _settings.length; i++){
      const INTENT = "chatbot.custom_intent_" + i;
      _main.Manager.addDocuments(INTENT, _settings[i].utterances);
      _main.Manager.addAnswers(INTENT, _settings[i].answers);
    }
  }
}

module.exports = ChatBot;
