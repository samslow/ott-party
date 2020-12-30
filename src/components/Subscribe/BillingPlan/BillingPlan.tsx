import { css } from '@emotion/native';
import { Txt } from '@src/shared';
import { addDelimiter } from '@src/utils';
import React, { useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';
import Modal from 'react-native-modal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { sectionTitleCss } from '../style';
import { Plan } from '../Subscribe';
import {
  inputTextCss,
  modalCss,
  ModalView,
  PlanInputBox,
  PlanItem,
} from './style';

interface Props {
  plans?: Plan[];
}

export default function BillingPlan({ plans }: Props) {
  const [planModalVisible, setPlanModalVisible] = useState(false);
  const [plan, setPlan] = useState<string | null>(null);

  const selectedPlan: Plan | null = useMemo(() => {
    if (!plans) {
      return null;
    }
    const selectedIdx = plans.findIndex((p) => p.planName === plan);

    return selectedIdx === -1 ? null : plans[selectedIdx];
  }, [plans, plan]);

  return (
    <View>
      <View style={sectionTitleCss}>
        <Txt fontWeight="700" size={20}>
          플랜
        </Txt>
      </View>
      <PlanInputBox
        onPress={() => setPlanModalVisible((visible) => !visible)}
        activeOpacity={0.5}>
        <View style={inputTextCss}>
          <View
            style={css`
              flex-direction: row;
              align-items: center;
            `}>
            <Txt size={20} color={plan == null ? '#888' : undefined}>
              {plan ?? '플랜을 선택하세요'}
            </Txt>
            {selectedPlan != null && (
              <Txt size={16} color={'#888'}>
                {`  ₩ ${String(selectedPlan?.price) ?? '0'}`}
              </Txt>
            )}
          </View>
          <MaterialIcons name="keyboard-arrow-down" size={30} color={'#888'} />
        </View>
      </PlanInputBox>

      <Modal
        useNativeDriver
        isVisible={planModalVisible}
        style={modalCss}
        onBackdropPress={() => setPlanModalVisible(false)}>
        <ModalView>
          <Txt fontWeight="900" size={22}>
            플랜 선택하기
          </Txt>
          <FlatList
            contentContainerStyle={{ marginTop: 15 }}
            data={plans}
            renderItem={({ item }) => (
              <PlanItem
                onPress={() => {
                  setPlan(item.planName);
                  setPlanModalVisible(false);
                }}>
                <Txt fontWeight="700">{item.planName}</Txt>
                <Txt fontWeight="300">{`₩ ${addDelimiter(item.price)}`}</Txt>
              </PlanItem>
            )}
            keyExtractor={(item) => item.planName}
          />
        </ModalView>
      </Modal>
    </View>
  );
}
