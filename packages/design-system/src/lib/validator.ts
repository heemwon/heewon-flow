export const HELP_MSG = {
  ID: {
    REQUIRED: "아이디를 입력해 주세요.",
    INVALID: "4~20자의 영문 소문자, 숫자만 사용 가능합니다.",
    START_WITH_LETTER: "아이디는 영문으로 시작해야 합니다.",
  },
  NAME: {
    REQUIRED: "이름을 입력해 주세요.",
    INVALID: "이름을 입력해 주세요.",
  },
  EMAIL: {
    REQUIRED: "이메일을 입력해 주세요.",
    INVALID: "올바른 이메일 형식이 아닙니다.",
  },
} as const;

export const validateId = (id: string) => {
  const trimmedId = id.trim();

  if (!trimmedId) {
    return { isValid: false, message: HELP_MSG.ID.REQUIRED };
  }

  if (!/^[a-z]/.test(trimmedId)) {
    return { isValid: false, message: HELP_MSG.ID.START_WITH_LETTER };
  }

  const idRegex = /^[a-z0-9]{4,20}$/;
  const isValid = idRegex.test(trimmedId);

  return {
    isValid,
    message: isValid ? "" : HELP_MSG.ID.INVALID,
  };
};

export const validateName = (name: string) => {
  const trimmedName = name.trim();

  if (!trimmedName) {
    return { isValid: false, message: HELP_MSG.NAME.REQUIRED };
  }

  const isValid = trimmedName.length >= 2;

  return {
    isValid,
    message: isValid ? "" : HELP_MSG.NAME.INVALID,
  };
};

export const validateEmail = (email: string) => {
  const trimmedEmail = email.trim();

  if (!trimmedEmail) {
    return { isValid: false, message: HELP_MSG.EMAIL.REQUIRED };
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValid = emailRegex.test(trimmedEmail) && trimmedEmail.length <= 254;

  return {
    isValid,
    message: isValid ? "" : HELP_MSG.EMAIL.INVALID,
  };
};
