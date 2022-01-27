
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

