
  const ModalV = daggy.taggedSum('Modal', {
    InfoModal: ['comp', 'props'],
    WinModal: ['comp', 'props'],
    NoModal: [],
  })

  const InfoModal_ = ModalV.InfoModal(HOCModal(InfoModal()), {
    isOpen: event === 'InfoModal',
    handleClose: () => dispatch({ type: 'Event', value: 'NoModal' }),
  })

  const WinModal_ = ModalV.WinModal(
    HOCModal(
      WinModal({
        handleShare: updateClipboard,
        state
      })
    ),
    {
      isOpen: event === 'WinModal',
      handleClose: () => dispatch({ type: 'Event', value: 'NoModal' }),
    }
  )

  const AlertV = daggy.taggedSum('Alert', {
    WordNotFoundAlert: ['comp', 'props'],
    GameLostAlert: ['comp', 'props'],
    ShareCompleteAlert: ['comp', 'props'],
    NotEnoughLettersAlert: ['comp', 'props'],
  })
  const WordNotFoundAlert_ = AlertV.WordNotFoundAlert(Alert, {
    message: 'Word Not Found',
    isOpen: true,
  })
  const GameLostAlert_ = AlertV.GameLostAlert(Alert, {
    message: `You Lost, The Word Was ${solution}`,
    isOpen: true,
  })
  const ShareCompleteAlert_ = AlertV.ShareCompleteAlert(Alert, {
    message: 'Share Complete',
    variant: 'success',
    isOpen: true,
  })
  const NotEnoughLettersAlert_ = AlertV.NotEnoughLettersAlert(Alert, {
    message: 'Not Enough Letters',
    isOpen: true,
  })
