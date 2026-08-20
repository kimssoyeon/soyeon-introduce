'use client'
import * as S from "./style";
import Link from "next/link";
import { DropdownMenu } from "radix-ui";
import { useEffect, useState } from "react";

export default function Contacts() {

  const handleCopy = async (title: string, content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      alert(`${title}가 복사되었습니다.`)
    } catch (error) {
      alert('복사에 실패했습니다.');
    }
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <S.ContactTrigger>
          Contact
        </S.ContactTrigger>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content asChild>
        <S.Contacts>
          <DropdownMenu.Item asChild>
            <p onClick={() => handleCopy("메일주소", "soyeon20031010@gmail.com")}>
              Mail
            </p>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <p onClick={() => handleCopy("전화번호", "010-5745-3645")}>
              Phone
            </p>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <Link href="https://www.instagram.com/syst03">
              Insta
            </Link>
          </DropdownMenu.Item>
        </S.Contacts>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}