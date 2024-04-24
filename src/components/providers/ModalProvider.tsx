"use client";

import React, { useEffect, useState } from "react";

import {
  CreateChannelModal,
  CreateServerModal,
  DeleteChannelModal,
  DeleteServerModal,
  EditChannelModal,
  EditServerModal,
  InviteModal,
  LeaveServerModal,
  MembersModal,
} from "../modals";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  // server-side 에서 렌더링 되지 않도록 막음 -> 하이드레이션 에러를 우회하기 위해.
  // 모달은 클라이언트 사이드의 어떠한 액션
  // - state 변경
  // - user action
  // 등으로 인해 동작하므로 서버사이드에서 렌더링 되면 원하는 결과대로 동작하지 않음
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <CreateServerModal />
      <EditServerModal />
      <CreateChannelModal />
      <LeaveServerModal />
      <DeleteServerModal />
      <DeleteChannelModal />
      <EditChannelModal />
      <InviteModal />
      <MembersModal />
    </>
  );
};

export default ModalProvider;
